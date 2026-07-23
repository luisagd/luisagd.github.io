import{j as e,H as a}from"./index-CDiOqy5b.js";function o(){let t=String.raw`#!/usr/bin/env python3
# Model by Luis A.
# install dependecies with:
# pip install OpenNMT-py sentencepiece pandas pyarrow
# Because Windows is not supported by OpenNMT-py 3.0, a linux machine is recommended.

from alive_progress import alive_bar
import sentencepiece #used for encoding.
import os #used for getting the newest model in case the training stops early.
import subprocess #used for running shell commands
import unicodedata #used for normalizing
vocab_size = 16000
train_steps = 10000 #try 80K
tokenizer = 'unigram' #unigram, bpe, word or char
n_threads = 12 #Number of cpu threads for optimization
input_data = ['bible', 'jojovai', 'oldi_seed', 'nllb-gold', 'nllb-semi', 'grammar','nllb-trash']
input_weight = [10,10,10,8,6,8,1]

assert len(input_data)==len(input_weight)

def txt_to_list(path) -> list[str]:
    data = []
    with open(path, encoding='utf-8') as f:
        for line in f:
            data.append(line.strip())
    return data
def list_to_txt(list, path):
    with open(path, 'w', encoding='utf-8') as f:
        f.write("\n".join(list))
# Loading bible corpus
def parse_bible():
    with open("corpora/bible.json", "r", encoding="utf-8") as json_file:
        import json
        data = json.load(json_file)
        with open('data/bible-gn.txt', 'w', encoding="utf-8") as f:
            for line in data:
                f.write(f"{line[0]}\n")   
        with open('data/bible-es.txt', 'w', encoding="utf-8") as f:
            for line in data:
                f.write(f"{line[1]}\n")
# Loading jojajovai_all
def parse_jojovai():
    with open('corpora/jojajovai_all.csv', encoding='utf-8', newline='') as csvfile:
        import csv
        jojovai = csv.reader(csvfile, delimiter=',', quotechar='"', skipinitialspace=True)
        es = []
        gn = []
        for row in jojovai:
            es.append(row[3])
            gn.append(row[2])
        assert len(es)==len(gn)
        with open('data/jojovai-es.txt', 'w', encoding='utf-8') as f:
            for line in es:
                f.write(line+"\n")
        with open('data/jojovai-gn.txt', 'w', encoding='utf-8') as f:
            for line in gn:
                f.write(line+"\n")
def parse_flores():
    #download at: cd corpora && git lfs install && git clone https://huggingface.co/datasets/openlanguagedata/flores_plus
    import pyarrow.parquet as pq
    import pandas as pa
    data_es= pq.read_table('corpora/flores_plus/dev/spa_Latn.parquet', columns=['text']).to_pandas()
    data_es2= pq.read_table('corpora/flores_plus/devtest/spa_Latn.parquet', columns=['text']).to_pandas()
    final_es = pa.concat([data_es,data_es2])
    with open('data/flores_plus-es.txt', '+w', encoding='utf-8') as f:
        for index, row in final_es.iterrows():
            f.write(row['text']+"\n")

    data_gn= pq.read_table('corpora/flores_plus/dev/gug_Latn.parquet', columns=['text']).to_pandas()
    data_gn2= pq.read_table('corpora/flores_plus/devtest/gug_Latn.parquet', columns=['text']).to_pandas()
    final_gn = pa.concat([data_gn,data_gn2])
    with open('data/flores_plus-gn.txt', '+w', encoding='utf-8') as f:
        for index, row in final_gn.iterrows():
            f.write(row['text']+"\n")
def parse_oldi_seed():
    #download at: cd corpora && git lfs install && git clone https://huggingface.co/datasets/openlanguagedata/oldi_seed
    import pyarrow.parquet as pq
    oldi_seed_es = pq.read_table('corpora/oldi_seed/seed/spa_Latn.parquet', columns=['text']).to_pandas()
    oldi_seed_gn = pq.read_table('corpora/oldi_seed/seed/gug_Latn.parquet', columns=['text']).to_pandas()
    with open('data/oldi_seed-gn.txt', '+w', encoding='utf-8') as f:
        for index, row in oldi_seed_gn.iterrows():
            f.write(row['text']+"\n")
    with open('data/oldi_seed-es.txt', '+w', encoding='utf-8') as f:
        for index, row in oldi_seed_es.iterrows():
            f.write(row['text']+"\n")  
def parse_nllb():
    #https://opus.nlpl.eu/NLLB/gn&en/v1/NLLB
    import os
    if not os.path.isfile('corpora/nllb-es.txt'):
    #This takes a long time (At least a whole day). By default, I include the translated text as to speed up the process. 
    #However, if needed, you can delete the file in 'corpora/nllb-es' and the script will retranslate the text. Remember to install transformers!
        from transformers import MarianMTModel, MarianTokenizer
        def minibatch(seq, size):
            items = []
            for x in seq:
                items.append(x)
                if len(items) >= size:
                    yield items
                    items = []
            if items:
                yield items
            
        data = txt_to_list('NLLB.en-gn.en')
        print(len(data))
        with open('corpora/NLLB-es.txt', '+w', encoding='utf-8') as output:
            print('setting up the model for NLLB...')
            model = MarianMTModel.from_pretrained(f'Helsinki-NLP/opus-mt-en-es').cuda()
            tokenizer = MarianTokenizer.from_pretrained(f'Helsinki-NLP/opus-mt-en-es')
            print('preprocessing... [batching]')
            batch_size = 100 #good value for 24GB of VRAM. Adjust as needed 
            batches = minibatch(data, batch_size)
            with alive_bar(len(data), title='translating nllb from en to es') as bar:
                report_vram = False
                try:
                    import nvidia_smi
                    nvidia_smi.nvmlInit()
                    global handle
                    handle = nvidia_smi.nvmlDeviceGetHandleByIndex(0)
                    # card id 0 hardcoded here, there is also a call to get all available card ids, so we could iterate
                    report_vram = True
                except ImportError as e:
                    pass
                for text_batch in batches:
                    tokens = tokenizer(text_batch, return_tensors="pt", padding=True, truncation=True)
                    tokens = {k:v.cuda() for k, v in tokens.items()}
                    translate_tokens = model.generate(**tokens)
                    translate_batch = [tokenizer.decode(t, skip_special_tokens=True) for t in translate_tokens]
                    if report_vram:
                        info = nvidia_smi.nvmlDeviceGetMemoryInfo(handle)
                        # bar.text(f'Total memory: {info.total}')
                        bar.text(f'VRAM: {info.used/1048576}MB/{info.total/1048576}MB')
                        # bar.text(f'Free memory: {info.free}')
                    for i in translate_batch:
                        bar()
                        output.write(i+"\n")
                if report_vram:
                    nvidia_smi.nvmlShutdown()
def parse_nllb_pt():
    #https://opus.nlpl.eu/NLLB/gn&en/v1/NLLB
    import os
    if not os.path.isfile('corpora/nllb2-es.txt'):
    #This takes a long time (At least a whole day). By default, I include the translated text as to speed up the process. 
    #However, if needed, you can delete the file in 'corpora/nllb-es' and the script will retranslate the text. Remember to install transformers!
        from transformers import MarianMTModel, MarianTokenizer
        def minibatch(seq, size):
            items = []
            for x in seq:
                items.append(x)
                if len(items) >= size:
                    yield items
                    items = []
            if items:
                yield items
            
        data = []
        with open('NLLB.gn-pt.pt') as input:
            data = input.read().splitlines()
        with open('corpora/nllb2-es.txt', '+w', encoding='utf-8') as output:
            print('setting up the model for NLLB...')
            model = MarianMTModel.from_pretrained(f'Helsinki-NLP/opus-mt-pt-es').cuda()
            tokenizer = MarianTokenizer.from_pretrained(f'Helsinki-NLP/opus-mt-pt-es')
            print('preprocessing... [batching]')
            batch_size = 100 #good value for 24GB of VRAM. Adjust as needed 
            batches = minibatch(data, batch_size)
            with alive_bar(len(data), title='translating nllb from pt to es') as bar:
                report_vram = False
                try:
                    import nvidia_smi
                    nvidia_smi.nvmlInit()
                    global handle
                    handle = nvidia_smi.nvmlDeviceGetHandleByIndex(0)
                    # card id 0 hardcoded here, there is also a call to get all available card ids, so we could iterate
                    report_vram = True
                except ImportError as e:
                    pass
                for text_batch in batches:
                    tokens = tokenizer(text_batch, return_tensors="pt", padding=True, truncation=True)
                    tokens = {k:v.cuda() for k, v in tokens.items()}
                    translate_tokens = model.generate(**tokens)
                    translate_batch = [tokenizer.decode(t, skip_special_tokens=True) for t in translate_tokens]
                    if report_vram:
                        info = nvidia_smi.nvmlDeviceGetMemoryInfo(handle)
                        # bar.text(f'Total memory: {info.total}')
                        bar.text(f'VRAM: {info.used/1048576}MB/{info.total/1048576}MB')
                        # bar.text(f'Free memory: {info.free}')
                    for i in translate_batch:
                        bar()
                        output.write(i+"\n")
                if report_vram:
                    nvidia_smi.nvmlShutdown()
# parse_nllb_pt()     
# parse_nllb()

#we should now have different corpora with the following format:
#  data/{title}-es.txt
#  data/{title}-gn.txt
#the program will handle everything as long as the title is included here below:



def filter_data(path1:str, path2: str):
    #â,ä-> ã
    #ê ë-> ẽ
    #î ï-> ĩ
    #ô ö-> õ
    #û ü-> ũ
    #ŷ ÿ-> ỹ
    #ʼ-> '’
    #ĝ -> g̃
    def replace_special_chars(text: str) -> str:
        replacements = {
            'â': 'ã', 'ä': 'ã', 'ê': 'ẽ', 'ë': 'ẽ', 'î': 'ĩ', 'ï': 'ĩ',
            'ĝ': 'g̃', 'ô': 'õ', 'ö': 'õ', 'û': 'ũ', 'ü': 'ũ', 'ŷ': 'ỹ', 'ÿ': 'ỹ',
            'Â': 'Ã', 'Ä': 'Ã', 'Ê': 'Ẽ', 'Ë': 'Ẽ', 'Î': 'Ĩ', 'Ï': 'Ĩ',
            'Ô': 'Õ', 'Ö': 'Õ', 'Û': 'Ũ', 'Ü': 'Ũ', 'Ŷ': 'Ỹ', 'Ÿ': 'Ỹ',
            'Ĝ': 'G̃'
        }
        for old, new in replacements.items():
            text = text.replace(old, new)
        return text
    data1 = txt_to_list(path1)
    data2 = txt_to_list(path2)
    assert len(data1)==len(data2)
    final_data1 = []
    final_data2 = []
    for i in range(len(data1)):
        if len(data1[i].split())>2 and len(data2[i].split())>2:
            x1 = replace_special_chars(data1[i])
            x2 = replace_special_chars(data2[i])            
            final_data1.append(unicodedata.normalize('NFC', x1))
            final_data2.append(unicodedata.normalize('NFC', x2))
    list_to_txt(final_data1, path1)
    list_to_txt(final_data2, path2)

# Options to consider changing to improve accuracy:
#   --model_type (model algorithm: unigram, bpe, word or char)  type: std::string default: "unigram"
#   --use_all_vocab (If set to true, use all tokens as vocab. Valid for word/char models.)  type: bool default: false
#   --vocab_size (vocabulary size)  type: int32 default: 8000
 #--character_coverage=1  
def train_sp():
    for lang in ['es', 'gn']:
        paths = ""
        for source in ['bible', 'jojovai', 'oldi_seed']:
            paths+=f"data/{source}-{lang}.txt,"
        paths = paths[:-1]
        sentencepiece.SentencePieceTrainer.train(f'--input={paths} --model_prefix={lang} --vocab_size={vocab_size} --split_digits=true --num_threads={n_threads} --model_type={tokenizer} --minloglevel=2')

sp = sentencepiece.SentencePieceProcessor()
def encode_subword(lang:str, src_path:str, subworded_path:str):
    # sp = sentencepiece.SentencePieceProcessor()
    sp.load(lang+".model")
    with open(src_path,'r', encoding="utf-8") as src, open(subworded_path, "w+", encoding="utf-8") as tokenized_file:
        for line in src:
            line = sp.encode_as_pieces(line.strip())
            line = " ".join([token for token in line])
            tokenized_file.write(line + "\n")  
def decode_subword(lang:str, subworded_path:str, desubworded_path:str):
    sp.load(lang+".model")
    #I load the file this way so that both paths can be the same
    decoded = []
    for line in txt_to_list(subworded_path):
        line = line.strip().split(" ")
        decoded.append(sp.decode_pieces(line))
    list_to_txt(decoded, desubworded_path)

def join_data(inputs):
    import os
    for folder in ['data', 'data_tokenized']:
        val_data = []
        test_data = []
        for lang in ['es', 'gn']:
            for source in inputs:
                with open(f"{folder}/{source}-{lang}-val.txt", encoding="utf-8") as f:
                    val_data.extend(f.read().splitlines())
                os.remove(f"{folder}/{source}-{lang}-val.txt")
                with open(f"{folder}/{source}-{lang}-test.txt", encoding="utf-8") as f:
                    test_data.extend(f.read().splitlines())
                os.remove(f"{folder}/{source}-{lang}-test.txt")
            list_to_txt(val_data, f'{folder}/val-{lang}.txt')    
            list_to_txt(test_data, f'{folder}/test-{lang}.txt')                     
def generate_opts(inputs, src, tgt):
    opts = f'''
data:
'''
    for i, source in enumerate(inputs):
        opts += f'''  {source}:
    path_src: data_tokenized/{source}-{src}-train.txt
    path_tgt: data_tokenized/{source}-{tgt}-train.txt
    weight: {input_weight[i]}\n'''
    opts+=f'''  valid:
    path_src: data_tokenized/val-{src}.txt
    path_tgt: data_tokenized/val-{tgt}.txt'''
    return opts
def model_specific(src='es', tgt='gn'):
        config = f'''# config.yaml
save_data: run
## Where the vocab(s) will be written
src_vocab: run/{src}.vocab
tgt_vocab: run/{tgt}.vocab

# Prevent overwriting existing files in the folder
overwrite: True

# Vocabulary size - should be the same as in sentence piece
src_vocab_size: {vocab_size}
tgt_vocab_size: {vocab_size}

{generate_opts(input_data,src,tgt)}    

src_seq_length: 200
tgt_seq_length: 200

# Tokenization options
src_subword_model: {src}.model
tgt_subword_model: {tgt}.model

# Where to save the log file and the output models/checkpoints
log_file: train.log
save_model: models/model.{src}-{tgt}

# Default: 5000 - Save a model checkpoint for each n
save_checkpoint_steps: {int(train_steps/5)}

# To save space, limit checkpoints to last n
keep_checkpoint: 3
# seed: 3435

# Default: 100000 - Train the model to max n steps
# Increase to 200000 or more for large datasets
# For fine-tuning, add up the required steps to the original steps
train_steps: {train_steps}

valid_steps: {min(int(train_steps/5), 500)} # Default: 10000 - Run validation every n steps
early_stopping: 3 #The model will stop after seeing no improvement over 3 iterations

report_every: {min(int(train_steps/5), 50)}
# warmup_steps: {int(train_steps/2)} # Default: 4000 - Number of warmup steps for custom decay.
warmup_steps: 1000

world_size: 1 # Number of GPUs, and IDs of GPUs
gpu_ranks: [0]
batch_type: "tokens"
batch_size:  8192  # Tokens per batch, 8192 is valid for transformers; 24576 for rnn
valid_batch_size: 4096
accum_count: [4]
num_workers: 4 #number of workers for each process. If you run on one GPU the recommended value is 4. If you run on more than 1 GPU, the recommended value is 2


model_dtype: "fp16"
# apex_opt_level: "O1" #https://nvidia.github.io/apex/amp.html#opt-levels
# Default: "sgd" - Possible choices: (choose from 'sgd', 'adagrad', 'adadelta', 'adam', 'sparseadam', 'adafactor', 'fusedadam')
optim: "adam"
# Default: 1.0 - Starting learning rate. Recommended settings: sgd = 1, adagrad = 0.1, adadelta = 1, adam = 0.001
learning_rate: 0.001
# decay_method: "noam"
# adam_beta2: 0.998

#custom
max_grad_norm: 0
param_init: 0
param_init_glorot: true
hidden_size: 256
normalization: "tokens"

# Transformer Model based on https://aclanthology.org/2020.coling-main.304.pdf
encoder_type: transformer
decoder_type: transformer

position_encoding: true
transformer_ff: 512
heads: 2
dropout: [0.2]
label_smoothing: 0.6
enc_layers: 5
dec_layers: 5
word_vec_size: 256 #must match hidden size?

# dropout_steps: [0]
# attention_dropout: [0.1]
        '''
        with open("config.yaml", "w+") as config_yaml:
            config_yaml.write(config)

        subprocess.run(["onmt_build_vocab", "-config","config.yaml","n_sample","-1"])

        subprocess.run(["onmt_train","-config","config.yaml"]) 
        print(f"\033[92m STEP 4: Training the OpenNMT model--- COMPLETE\033[0m")
        subprocess.run(["onmt_translate","-model",newest('models/'),"-src",f"data_tokenized/flores_plus-{src}.txt","-output",f"{src}-{tgt}-translated.txt","-gpu","0","-min_length","1"]) 
        decode_subword(tgt, f'{src}-{tgt}-translated.txt', f'{src}-{tgt}-translated.txt')
        get_bleu(f'data/flores_plus-{tgt}.txt',f'{src}-{tgt}-translated.txt')
        print(f"\033[92m STEP 5: Translating from {src} to {tgt} --- COMPLETE\033[0m")

    
def newest(path):
    files = os.listdir(path)
    paths = [os.path.join(path, basename) for basename in files]
    return max(paths, key=os.path.getmtime)

def get_bleu(hypothesis_path:str, reference_path:str):
    refs = txt_to_list(reference_path)
    # Open the translation file by the NMT model and detokenize the predictions
    preds = txt_to_list(hypothesis_path)
    import sacrebleu
    bleu = sacrebleu.corpus_bleu(preds, [refs])

    score_meaning = ""
    if bleu.score < 10:
        score_meaning = "Almost useless"
    elif bleu.score < 20:
        score_meaning = "Hard to get the gist"
    elif bleu.score < 30:
        score_meaning = "The gist is clear, but has significant grammatical errors"
    elif bleu.score < 40:
        score_meaning = "Understandable to good translations"
    elif bleu.score < 50:
        score_meaning = "High quality translations"
    elif bleu.score < 60:
        score_meaning = "Very high quality, adequate, and fluent translations"
    elif bleu.score > 60:
        score_meaning = "Quality often better than human"
    print(10*"-"+"EXAMPLES"+10*"-")
    print("\n".join(refs[-3:]))
    print("\n".join(preds[-3:]))                                           
    print(f"\033[96mBLEU: {bleu.score} ({score_meaning})\033[0m")

if __name__ == "__main__":
    for source in input_data:
        filter_data(f'data/{source}-gn.txt', f'data/{source}-es.txt')
    print("\033[92m STEP1: DATA IMPORT --- COMPLETE\033[0m")
    train_sp()
    print("\033[92m STEP 2.1: Training model for subwording --- COMPLETE\033[0m")
    for source in input_data + ['flores_plus']:
        encode_subword('es', f'data/{source}-es.txt', f'data_tokenized/{source}-es.txt')
        encode_subword('gn', f'data/{source}-gn.txt', f'data_tokenized/{source}-gn.txt')
    print(f"\033[92m STEP 2.2: Source data subworded with {tokenizer} at data_tokenized/ --- COMPLETE\033[0m")
    train_per=0.95
    val_per=0.05
    test_per=0.00
    assert train_per+val_per+test_per==1, "The percentages should add to 100%"
    for source in input_data:
        for folder in ['data','data_tokenized']:
            for lang in ['es','gn']:
                new_data = txt_to_list(f'{folder}/{source}-{lang}.txt')
                train = new_data[:int(len(new_data)*train_per)]
                val = new_data[int(len(new_data)*train_per):int(len(new_data)*(train_per + val_per))]
                test = new_data[-int(len(new_data)*test_per):]
                list_to_txt(train, f"{folder}/{source}-{lang}-train.txt")
                list_to_txt(val, f"{folder}/{source}-{lang}-val.txt")
                list_to_txt(test, f"{folder}/{source}-{lang}-test.txt")
    join_data(input_data)

    print(f"\033[92m STEP 3: Spliting data --- COMPLETE\033[0m")
    # model_specific('es', 'gn')
    model_specific('gn', 'es')
`;return e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx("title",{children:"Ñembohasa | luisagd"}),e.jsx("meta",{name:"description",content:"An OpenNMT translation model for Guarani and Spanish."})]}),e.jsx("pre",{children:t})]})}export{o as default};
