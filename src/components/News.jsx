import React from 'react';
import './News.css';

function News() {
    return (
        <React.Fragment>
            <div id="masthead">
                <h1>The HackIN Times</h1>
                <p styles="text-align:center">Don't mess with a coder</p>
            </div>

            <div className="masonry">
                <div className="item">
                    <article>
                        <img src="https://media1.tenor.com/images/1cec9996b62a59813e973e271571e535/tenor.gif?itemid=7297628" />
                        <h3>These Columns Wrap Like A Real Newspaper!</h3>
                        <p>You may have noticed that when you get to the bottom
                        of a column, the text continues at the top of the next column.
                        That's pretty cool, right? Look at the code if you like it and let me know how to improve it.</p>
                        <p>Oh yeah, it's also responsive, so the amount of columns
                        changes depending on the size of your browser. Admittedly,
                        there isn't much point to a multi-column faux newspaper experience on a mobile device...</p>
                        <p>The first version of this code didn't have article tags,
                        it just had .item divs and it worked just fine.
                        I added article tags just for ease so I could add some margin at the bottom of articles and crank this out.
                        I'm sure there is a better way to do this. You let me know. Thanks.</p>
                        <p>Now, if you'll excuse me, I'm going to fill out the rest of this
                        front page "news" with random garbage I Google up...Enjoy your day.</p>
                    </article>
                </div>
                <div className="item">
                    <article>
                        <img src="https://images.fastcompany.net/image/
                        upload/w_1153,ar_16:9,c_fill,g_auto,f_auto,q_auto,fl_lossy/wp-cms/uploads/2018/10/
                        p-1-secrets-of-people-who-stay-happy-in-the-worst-circumstances.jpg" />
                        <h3>Secrets of people who stay happy in the worst circumstances</h3>
                        <p>Bad things happen both personally and professionally. Relationships end.
                        Significant others get sick or die. Promotions are given to someone else.
                        Clients leave. Companies go through rounds of layoffs.</p>
                        <p>In the face of these setbacks, some people seem to fall apart,
                        while others find ways to move forward and continue to get things done.
                        Are there things you can do to be resilient?</p>
                        <p>In the face of these setbacks, some people seem to fall apart,
                        while others find ways to move forward and continue to get things done.
                        Are there things you can do to be resilient?</p>
                        <p>First, bear in mind that resilience does not mean ignoring the negative
                        feelings that come along with a tough time.
                        Significant personal or professional losses will lead to feelings of sadness and disappointment.
                        It is natural to grieve about these losses and it is important to give yourself some time and space to do so.
                        You are not obliged to go through all five stages of grief,
                        but you shouldn’t feel guilty if you do experience sadness or
                        anger before you come to accept what has happened.
                        <a href="https://www.fastcompany.com/90253795/secrets-of-
                        people-who-stay-happy-in-the-worst-circumstances" target="_blank">Read more ></a></p>
                    </article>

                </div>
                <div className="item">
                    <article>
                        <img className="bw" src="https://cdn-images-1.medium.com/max/1600/1*0vYpx6YZrlWCr2pVLsFtSQ.png" />
                        <h3>People Are Great and Should be Treated Like Royalty</h3>
                        <p>In my ten years of web development and web design, I see people make the same
                        stupid mistakes over and over when it comes to designing websites.
                        Most people think that just because they understand something,
                        that everyone understands it same way they do. But this never the case. EVER!</p>
                        <blockquote><strong>Important:</strong>
                        Someone, somewhere, is not going to understand something the same way as you understand it,
                        no matter how simple or intuitive something may seem to you, it will not make sense to someone else,
                        and there is nothing any of us can do about it.
                        You have to accept this, understand it, and move on knowing this.</blockquote>

                        <p>I want you to read that again. It is critical that you understand what
                        I just said to be successful in pretty much anything you do, but most importantly
                        design and user experience. These people are the lowest common denominator.
                        Which means, just like adding fractions we need to break it down before we add it all together.</p>
                        <p>I have lived by one simple rule, and it as made be very successful
                        as a web developer, a designer, and pretty much everything else I’ve done.</p>
                        <q>People are great and should be treated like royalty</q>

                        <p>If you don’t want a user to think something,
                        you better clarify, because someone is going to think it.
                        If you don’t want a user to click something, you better hide it or disable,
                        because some moron is going to click it no matter what it says it does.</p>
                        <p><strong>Keep it simple, keep it stupid!</strong></p>
                        <p>Just because something makes sense to you doesn’t mean it makes sense to everyone else,
                        and it is better to error on the side of over clarification than leaving
                        important gaps because you assumed everyone understood something.</p>
                        <p>Think about, for instance, reading the rules to a board game,
                        and they tell you that you can spend the red tokens as health.
                        But, as you look at everything in the game you realize that there a 3 different red tokens and
                        the rules never clarify which red tokens to use. It’s probably the ones with the cross on it,
                        but who knows! I didn’t create the game.
                        <a href="https://hackernoon.com/people-are-dumb-and-should-be-treated-like-morons-78cb6e5051d0"
                            target="_blank">Read more ></a></p>
                    </article>
                </div>
                <div className="item">
                    <article>
                        <h3>Goldman Sachs former investment bankers Tim Leissner
                        and Roger Ng charged in $4 billion Malaysian funding scheme</h3>
                        <p> Two former Goldman Sachs investment bankers were charged
                        Thursday with helping to raise money for a Malaysian investment
                        fund that has lost $4 billion, according to federal prosecutors.</p>

                        <p>Tim Leissner, 48, and Roger Ng, 51, were charged in a
                        three-count criminal indictment in Brooklyn federal court Thursday.</p>

                        <p>Leissner pleaded guilty to conspiring to launder money and to
                        violate the Foreign Corrupt Practices Act. He will forfeit $43.7 million as a
                        "result of his crimes," officials said.
                        <a href="https://abcnews.go.com/US/goldman-sachs-investment-bankers-tim-leissner-roger-ng/story?id=58898092"
                            target="_blank">Pretty shocking stuff (not) ></a>
                        </p>
                    </article>
                </div>
                <div className="item">
                    <article>
                        <h3>Brace yourselves: Ads in WhatsApp are coming</h3>
                        <p>For almost 10 years, WhatsApp defied the odds and staunchly
                        rejected placing advertisements in the app. Unfortunately,
                        WhatsApp vice-president Chris Daniels confirmed with Outlook India
                        that the messaging service’s opposition to ads would soon come to an end.</p>

                        <p>According to Daniels, WhatsApp will place ads in the Status section.
                        This is the section that takes more than a few inspirations from
                        Instagram Stories and lets you share text, photos, videos, and GIFs.
                        After 24 hours, any content you put in the Status section disappears.</p>

                        <p>Daniels added that ads in the Status section would be the
                        “primary monetization mode for the company as well as an opportunity for businesses to reach people on WhatsApp.”
                        Daniels did not say when WhatsApp users can expect to see ads in the app
                        or whether the messaging service has plans for additional revenue streams.
                        Facebook’s native advertising system would reportedly serve as the backbone for ads in WhatsApp.</p>
                        <p>Personally, I don't care about this, but if you do, you can...
                        <a href="https://www.androidauthority.com/whatsapp-ads-facebook-920793/" target="_blank">Read more ></a></p>
                    </article>
                </div>
                <div className="item">
                    <article>
                        <img src="https://techcrunch.com/wp-content/uploads/2017/
                        10/gettyimages-503631250.jpg?w=1390&crop=1" alt="Netflix Yo" />
                        <h3>Netflix changes its release model, with exclusive theatrical runs for ‘Roma’ and others</h3>
                        <p> Netflix  is finally changing its long-held policy around the theatrical release of its original films.</p>

                        <p>In the past, the streaming service has been willing to release its films in theaters,
                        but it refused to grant those theaters an exclusive release window,
                        which meant that few of them were interested. That, in turn, may have hurt filmmakers’
                        chances when it came to getting nominated for major awards.
                        (It also prompted the Cannes Film Festival to create a new rule
                        that effectively blocks Netflix films from competing.)</p>
                        <p>It’s hard to know for certain whether (say)
                        “Beasts of No Nation” or “Okja” or “The Meyerowitz Stories”
                        would have won more awards of they’d made it into more theaters,
                        but it’s worth noting that Amazon does release its films with an exclusive theatrical window,
                        and that’s paid off in some major Oscar wins and a couple of genuine indie hits.</p>
                        <p>This year, Netflix might have its strongest Oscar contenders yet,
                        particularly with “Roma,” the new film from Alfonso Cuarón, who won an Oscar for directing “Gravity.”
                        The early reviews for “Roma” suggest that a) it may be the best movie of the year, and b)
                        it really should be seen on the big screen.</p>

                        <p>So the service announced yesterday that “Roma,” along with “The Ballad of Buster Scruggs”
                        (directed by the Coen Brothers) and “Bird Box” (directed by Susanne Bier and starring Sandra Bullock),
                        will get exclusive theatrical runs. <a href="https://techcrunch.com/2018/11/01/netflix-theaters/"
                            target="_blank">Read more ></a></p>
                    </article>
                </div>
                <div className="item">
                    <article>
                        <img src="https://media.npr.org/assets/img/2018/10/30/getty
                        images-530611158_custom-ecd4fe24df1a5e399363d263d90426022148ffe9-s800-c85.jpg" />
                        <h3>When Adolescents Give Up Pot, Their Cognition Quickly Improves</h3>
                        <p> Marijuana, it seems, is not a performance-enhancing drug.
                        That is, at least, not among young people, and not when the activity is learning.</p>

                        <p>A study published Tuesday in the Journal of Clinical Psychiatry finds that when
                        adolescents stop using marijuana — even for just one week — their verbal learning and memory improve.
                        The study contributes to growing evidence that marijuana use in adolescents is
                        associated with reduced neurocognitive functioning.</p>

                        <p>More than 14 percent of students in middle school and high school
                        reported using marijuana within the past month, finds a National Institutes of Health survey conducted in 2017.
                        And marijuana use has increased among high-schoolers over the past 10 years,
                        according to the U.S. Department of Health & Human Services.</p>

                        <p>At the same time, the percentage of teens who believe that regular marijuana use poses
                        a great risk to their health has dropped sharply since the mid-2000s. And legalization of marijuana may
                        play a part in shaping how young people think about the drug. One study noted that after 2012,
                        when marijuana was legalized in Washington state, the number of eighth-graders there that believed
                        marijuana posed risks to their health dropped by 14 percent.</p>

                        <p>Researchers are particularly concerned with marijuana use among the young because
                        THC, the active ingredient in marijuana, most sharply affects the parts of
                        the brain that develop during adolescence.
                        <a href="https://www.npr.org/sections/health-shots/2018/10/30/662127406/
                        when-adolescents-give-up-pot-their-cognition-quickly-improves" target="_blank">Read more ></a></p>
                    </article>
                </div>
                <div className="item">
                    <article>
                        <img src="https://media.wired.com/photos/5bd7781e9a67d17e1fe94799/
                        master/w_582,c_limit/signal-544546921-1.jpg" />
                        <h3>Signal Has A Clever New Way To Shield Your Identity</h3>

                        <p> A KEY PART of what makes Signal the leading encrypted messaging app is its effort to minimize
                        the amount of data or metadata each message leaves behind.
                        The messages themselves are fully encrypted as they move across Signal's infrastructure,
                        and the service doesn't store logs of information like who sends messages to each other, or when.
                        On Monday, the nonprofit that develops Signal announced a new initiative to take those protections even further.
                        Now, it hopes to encrypt even information about which users are messaging each other on the platform.</p>

                        <p>As much as it values privacy, Signal still needs to see where messages are going
                        so that it can deliver them to the right account.
                        The service has also relied on seeing what account a message came from to help verify that the sender is legit,
                        limit the number of messages an account sends in a period of time to prevent it from spewing spam,
                        and offer other types of anti-abuse checks.</p>

                        <p>But having access to metadata about the sender and recipient—essentially the
                        address and return address on the outside of letters—offers a lot of information about
                        how people use Signal and with whom they associate. Think of it as the address and return
                        address on the envelope of a physical letter. So Signal's developers created workarounds
                        that will now allow the app to encrypt not just the contents of messages, but the identity of the sender.
                        <a href="https://www.wired.com/story/signal-sealed-sender-encrypted-messaging/" target="_blannk">Read more ></a></p>
                    </article>
                </div>
                <div className="item">
                    <article>
                        <img src="https://i.kinja-img.com/gawker-media/image/
                        upload/s--acGKjLiq--/c_scale,f_auto,fl_progressive,q_80,w_800/qxfzgh10cm4bjnelmoii.jpg" />
                        <h3>How to Stretch If You Hate Stretching</h3>

                        <p>Luckily for me, I don’t find physical activity to be a chore. I genuinely enjoy biking,
                        running and playing soccer, and do all of those things on the regular. But when it comes to stretching—well,
                        I just hate it! My mantra is basically, “I’ll stretch when I’m dead.”
                        The appealing part of playing sports and working out is the movement, and so,
                        when I’m presented with the concept of getting down on a mat and holding my body in a stagnant position,
                        I just... don’t do it.</p>

                        <p>In the same way that I only drink kombucha or take vitamins when I’m already sick,
                        I will only deign to do my physical therapy exercises when my low-key chronic injuries begin to
                        flare up and interfere with my ability to move my body with ease. Otherwise, I treat my aches and
                        pains as minor irritants that I can ignore. (I’m not alone in this—anyone who’s ever been to a group
                        exercise class can probably attest to the mass exodus that tends to happen during the last few minutes,
                        when all the “real” work is done and it’s time to stretch.)</p>

                        <p>I recognize that this is not sustainable, and I want to take better care of myself,
                        so I talked to physical therapists, personal
                        trainers and yogis for tips on how to trick myself into embracing this less exciting,
                        but still very necessary, component of physical fitness.
                        <a href="https://lifehacker.com/how-to-stretch-if-you-hate-stretching-1829767874"
                            target="_blank">Read more ></a></p>
                    </article>
                </div>
                <div className="item">
                    <article>
                        <h3>Cops: Woman strangles bouncer she thought slapped her bottom</h3>
                        <p>PLATTSBURGH, N.Y. (AP) - Authorities say a woman choked a nightclub bouncer
                        into unconsciousness after she mistakenly thought he had slapped her buttocks.</p>

                        <p>Police in Plattsburgh, New York, tell the Press-Republican that
                        22-year-old Kierah Lagrave, of Plattsburgh, was at the Five1Eight nightclub the night of
                        Oct. 20 when someone hit her from behind.</p>

                        <p>Police Chief Levi Ritter says say the club's surveillance video shows the
                        125-pound woman walking up behind a bouncer and choking him until he falls unconscious to the floor.</p>

                        <p>Ritter says the video also shows Lagrave's friend slapping her on the buttocks beforehand.</p>

                        <p>Police tracked down Lagrave and charged her with a felony count of strangulation.
                        She was released on her own recognizance.</p>

                        <p>Her attorney would not comment on the case.
                        <a href="https://www.koin.com/news/national/
                        cops-woman-strangles-bouncer-she-thought-slapped-her-bottom/1564269228" target="_blank">Source ></a></p>
                    </article>
                </div>
                <div className="item">
                    <article>
                        <h3>Chief: Florida man climbed into deep well to 'say he did it'</h3>
                        <p>DELEON SPRINGS, Fla. (AP) — Authorities say they've rescued a
                        Florida man who got stuck after climbing into a 30-feet (9-meter) deep well just "to say he did it."</p>

                        <p>Volusia County Fire Rescue Battalion Chief Scott Smoak tells news outlets
                        the man was stuck for about an hour early Wednesday before being pulled to safety.</p>

                        <p>Smoak tells WFTV the man didn't have the strength to pull himself
                        out of the narrow well but he was awake and talking to rescuers the entire time.
                        He says the man suffered a few bumps and bruises.</p>

                        <p>The well is located in DeLand, which is near Daytona Beach on Florida's Atlantic Coast.</p>

                        <p>He says the well is one of many in the area, and it needs a barrier
                        around it to "keep people from going down in these things."</p>
                    </article>
                </div>
                <div className="item">
                    <article>
                        <img src="https://i.imgur.com/CCnxxG6.jpg" alt="23 years old? Kill me now."/>
                        <h3>Meet the 23-year-old engineering detective behind the biggest leaks in tech</h3>
                        <p>You see it all the time — Facebook’s latest feature leaks to the public,
                        and everyone knows about it before Zuckerberg has said a word. But where do these leaks come from?</p>

                        <p>Jane Wong is a 23-year-old studying software engineering at UMass Dartmouth,
                        currently taking a gap year in Hong Kong. Her hobbies include travel, photography…
                        as well as reverse engineering and chasing bug bounties. She’s responsible for some
                        huge scoops from tech giants, including Facebook, Google, and Instagram.</p>
                        <p>Scroll through Wong’s Twitter, and you’ll see feature after feature,
                        leak after leak — Gboard’s new Material Design for search cards, Facebook’s
                        notification page is getting a redesign, Messenger is getting a dark mode…</p>
                        <p>There are many reverse engineer hobbyists out there, but Wong works independently, and for no money.
                        She’s even turned down job offers from tech publications looking for her to exclusively snoop for them.
                        How does she do what she does? And why?
                        <a href="https://thenextweb.com/tnw-answers/2018/10/24/
                        meet-the-23-year-old-engineering-detective-behind-the-biggest-leaks-in-tech/"
                            target="_blank">Read more ></a>
                        </p>
                    </article>
                </div>
                <div className="item">
                    <article>
                        <iframe className="video" width='100%' height='auto' scrolling='no'
                            src='https://www.washingtonpost.com/video/c/embed/b4553afe-dc5f-11e8-8bac-bfe01fcdc3a6'
                            frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullscreen />
                        <h3>Post Malone is the perfect pop star for this American moment. That’s not a compliment.</h3>
                        <p>DALLAS — Him?</p>

                        <p>The most popular young artist in the most unpopular young nation is a
                        rhinestone cowboy who looks like he crawled out of a primordial swamp of nacho cheese.
                        Post Malone is a Halloween rental, a removable platinum grill, a Cubic Zirconium proposal
                        on the jumbo screen of a last-place team.</p>

                        <p>His music — one of the shallowest bastardizations of rap to date,
                        and I don’t say that lightly — has the creative tension of associates at a
                        downtown law firm complaining that $150,000 a year just doesn’t cut it.
                        He looks like he got clubbed over the head by a cartoon peacock. He just turned 23.</p>

                        <p>And America just can’t get enough. Nielsen recently named the suburban-Dallas-raised
                        rapper 2018’s most popular musician. So it was only a matter of time before Malone had his own festival,
                        a contemporary rite of passage for nearly every major pop-rap star
                        who has his face plastered across Spotify’s Get Turnt Playlist.</p>

                        <p>The inaugural Posty Fest was held Sunday night in Dallas’s Dos Equis Pavilion,
                        and it was less a festival than a behemoth SAE rush mixer held on a few acres of corporate-branded concrete.
                        Many festivals pride themselves on offering non-music diversions such as art
                        installations or novel culinary options. There was none of that here, but there were $5 Jell-O shots.
                        There was little to separate it from a regular Post Malone concert
                        other than the big-name opening acts (Travis Scott; Tyler, the Creator; Lil Skies)
                        and True Religion-sponsored Post Malone bandannas featuring an
                        extreme close-up of Austin Post himself, glazed and squinting, as ever.</p>

                        <p>This should have ostensibly been a coronation, his unequivocal ascension to the
                        A-list pop superstardom of mono-named visionaries.
                        There are artists who dictate the zeitgeist and those who reflect it.
                        Post Malone is decidedly the latter, an avatar of algorithm culture that
                        rewards pleasant banality over the creatively vexing.
                        At his own festival in his hometown,
                        he had the opportunity to lucidly state his mission and values.
                        Instead, he revealed himself to be Jack Johnson with 808s and nakedly grafted hip-hop slang.</p>
                    </article>

                    <p>Consider this: You made all the required mock ups for commissioned layout,
                    got all the approvals, built a tested code base or had them built,
                    you decided on a content management system, got a license for it or
                    adapted open source software for your client's needs. Then the question arises:
                    where's the content? Not there yet? That's not so bad, there's dummy copy to the rescue.
                    But worse, what if the fish doesn't fit in the can, the foot's to big for the boot?
                    Or to small? To short sentences, to many headings, images too large for the proposed design, or too small,
                    or they fit in but it looks iffy for reasons the folks in the meeting can't quite tell right now,
                    but they're unhappy, somehow. A client that's unhappy for a reason is a problem,
                    a client that's unhappy though he or her can't quite put a finger on it is worse.</p>

                    <p>But. A big but: Lorem Ipsum is not t the root of the problem, it just shows what's going wrong.
                    Chances are there wasn't collaboration, communication, and checkpoints,
                    there wasn't a process agreed upon or specified with the granularity required.
                    It's content strategy gone awry right from the start.
                    Forswearing the use of Lorem Ipsum wouldn't have helped, won't help now.
                    It's like saying you're a bad designer, use less bold text, don't use italics, etc.</p>
                    <p>By 9:30 p.m., chants of “Posty! Posty!” filled the amphitheater.
                    Fifteen-year-old blond girls in Daisy Dukes and “Champagnes and Blunts”
                    shirts shrieked as if Post were the next in the lineage of the Backstreet Boys,
                    the Jonas Brothers or One Direction. The main difference this time is that
                    they honored their hero with matching temporary face tattoos — barbed wire on their foreheads,
                    a knifelike crucifix on their cheeks, and his trademark phrases inked in cursive:
                    “Stay Away” and “Rest Easy.”
                    <a href="https://www.washingtonpost.com/lifestyle/
                    post-malone-is-the-perfect-pop-star-for-this-american-moment-thats-not-a-compliment
                    /2018/10/30/ad6112b8-dbc4-11e8-b732-3c72cbf131f2_story.html" target="_blank">Read more></a></p>
                </div>

            </div>
            <footer>
                <h4>© 2020 Because who doesn't want a footer on their website?
                <br /><small>Follow us on.</small></h4>
            </footer>
        </React.Fragment>

        );
}

export default News;