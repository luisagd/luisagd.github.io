import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Blog() {
  return (
    <div>
      <main class="min-h-screen">
        <title>Blog</title>
        <meta name="description" content="My own blog" />
        <Navbar />
        <header class=" mt-5 flex flex-col items-center  h-10 text-center text-2xl md:text-3xl lg:text-4xl">
          <p>Blogs</p>
        </header>
        <div className="pl-10 lg:pl-32">
          <h1 class="text-left pt-5 text-xl lg:text-3xl">
            Tenses in english: An overview.
          </h1>
          <p>There are twelve tenses in english.</p>
          <table className="border">
            <caption>English tenses.</caption>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Simple</th>
                <th scope="col">Continuous</th>
                <th scope="col">Perfect</th>
                <th scope="col">Perfect Continuous</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <th scope="row">Present</th>
                <td>He walks</td>
                <td>He is walking</td>
                <td>He has walked</td>
                <td>He has been walking</td>
              </tr>
              <tr className="border">
                <th scope="row">Past</th>
                <td>He walked</td>
                <td>He was walking</td>
                <td>He had walked</td>
                <td>He had been walking</td>
              </tr>
              <tr className="border">
                <th scope="row">Future</th>
                <td>He will walk</td>
                <td>He will be walking</td>
                <td>He will have walked</td>
                <td>He will have been walking</td>
              </tr>
            </tbody>
          </table>
          <div className="pt-4">
            <h1 className="font-semibold text-xl">Present Simple</h1>
            <p>
              Used for facts; actions that happen in the moment; or indicates a
              habitual action.
            </p>
            <p>
              <span className="font-semibold">Syntax:</span> Subject +
              verb(s/es)
            </p>
            <p>
              <span className="font-semibold">Example:</span> He speaks a lot.
              They walk.
            </p>
          </div>
          <div className="pt-4">
            <h1 className="font-semibold text-xl">Present Continuous</h1>
            <p>
              Used for actions that happen in the moment, emphasizing the
              present.
            </p>
            <p>
              <span className="font-semibold">Syntax:</span> Subject + to be +
              verb-ing
            </p>
            <p>
              <span className="font-semibold">Example:</span> He is speaking on
              the phone. They are walking near the shore.
            </p>
          </div>
          <div className="pt-4">
            <h1 className="font-semibold text-xl">Present Perfect</h1>
            <p>
              Used for finished actions in the past, with an undefined (not
              mentioned) time. Used for unfinished actions that are still going
              on.
            </p>
            <p>
              <span className="font-semibold">Syntax:</span> Subject + have/has
              + Past Participle
            </p>
            <p>
              <span className="font-semibold">Example:</span> He has eaten
              lobster. They have walked for an hour.
            </p>
          </div>
          <div className="pt-4">
            <h1 className="font-semibold text-xl">
              Present Perfect Continuous
            </h1>
            <p>
              Used for unfinished actions that started in the past and still go
              on; focuses on progress and evidence of the action.
            </p>
            <p>
              <span className="font-semibold">Syntax:</span> Subject + have/has
              + been + verb-ing
            </p>
            <p>
              <span className="font-semibold ">Example:</span> He has been
              running a lot lately (there is a timeframe and an implied
              evidence).
            </p>
          </div>
          <div className="pt-4">
            <h1 className="font-semibold text-xl">Past Simple</h1>
            <p>Used for finished actions in the past with a time reference.</p>
            <p>
              <span className="font-semibold">Syntax:</span> Subject + verb-ed
            </p>
            <p>
              <span className="font-semibold">Example:</span> He watched TV last
              night.
            </p>
          </div>
          <div className="pt-4">
            <h1 className="font-semibold text-xl">Past Perfect</h1>
            <p>
              The past of the past. Used for finished actions that happened
              before another action.
            </p>
            <p>
              <span className="font-semibold">Syntax:</span> Subject + had +
              Past Participle
            </p>
            <p>
              <span className="font-semibold">Example:</span> Had he spoken that
              night, he would have gotten her hand.
            </p>
          </div>
          <div className="pt-4">
            <h1 className="font-semibold text-xl">Past Continuous</h1>
            <p>
              Used for actions that were in progress in the past; implies
              duration.
            </p>
            <p>
              <span className="font-semibold">Syntax:</span> Subject + was/were
              + verb-ing
            </p>
            <p>
              <span className="font-semibold ">Example:</span> He was running
              yesterday.
            </p>
          </div>
          <div className="pt-4">
            <h1 className="font-semibold text-xl">Past Perfect Continuous</h1>
            <p>
              Used for actions that started before [the specified timeframe] in
              the past and still were in progress at that time.
            </p>
            <p>
              <span className="font-semibold">Syntax:</span> Subject + had +
              been + verb-ing
            </p>
            <p>
              <span className="font-semibold ">Example:</span> He had been
              learning how to play the guitar for a month back then.
            </p>
          </div>
          <div className="pt-4">
            <h1 className="font-semibold text-xl">Future Simple</h1>
            <p>Used finished actions that are to happen.</p>
            <p>Will: Used for inmediate actions, promises, predictions.</p>
            <p>Going to: used for actions that were prevously thought about</p>
            <p>
              <span className="font-semibold">Syntax:</span> Subject + will /
              going to + verb
            </p>
            <p>
              <span className="font-semibold">Example:</span> He will clean the
              dishes.
            </p>
          </div>
          <div className="pt-4">
            <h1 className="font-semibold text-xl">Future Perfect</h1>
            <p>
              Used for finished actions that will be completed [in a determined
              time reference in the future].
            </p>
            <p>
              <span className="font-semibold">Syntax:</span> Subject + will have
              + Past Participle
            </p>
            <p>
              <span className="font-semibold">Example:</span> By tomorrow, he
              will have cleaned the yard already.
            </p>
          </div>
          <div className="pt-4">
            <h1 className="font-semibold text-xl">Future Continuous</h1>
            <p>
              Used for actions that will be in progress in the future;
              emphasizes duration.
            </p>
            <p>
              <span className="font-semibold">Syntax:</span> Subject + will be +
              verb-ing
            </p>
            <p>
              <span className="font-semibold ">Example:</span> Tomorrow he will
              be cleaning the whole day.
            </p>
          </div>
          <div className="pt-4">
            <h1 className="font-semibold text-xl">Future Perfect Continuous</h1>
            <p>
              Used for actions that started before [the specified timeframe] in
              the past and still were in progress at that time.
            </p>
            <p>
              <span className="font-semibold">Syntax:</span> Subject + had +
              been + verb-ing
            </p>
            <p>
              <span className="font-semibold ">Example:</span> He had been
              learning how to play the guitar for a month back then.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Blog;
