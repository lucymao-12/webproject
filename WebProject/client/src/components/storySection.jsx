import React from "react";

function StorySection(props) {
  let content;
  switch (props.section) {
    case "0":
      content = (
        <p>
          One night in one of the most haunted mansions in your city. It was a
          stupid carnival game played when you were 5 beers too deep into the
          night with the soaring of the wings of inebriated confidence. You
          staggered and swayed as you lined up those shots against those milk
          cans, the cheers of your friends being the only thing keeping you from
          floating away. And somehow even as your vision swam you landed each
          and every one. So, here you are with a prize that you never wanted,
          and one you barely remember winning, but the summer is waning and you
          have just enough time to go on one more adventure. Your friends Adam
          and Sylvie want to tag along and you have two more tickets, are you
          bringing them?
        </p>
      );
      break;
    case "1":
      content = (
        <p>
          Of course you are, a haunted mansion becomes a lot less haunted and a
          lot more fun with friends. And walking in an eerily silent and still
          Friday evening, you find yourself latching onto your friends’ stupid
          jokes for comfort. The doors creak open with a whine so loud you
          wonder if the groundskeeper had been told specifically to never oil
          the hinges. The imposing three-story structure looms, and the light of
          the full moon casts a shadow of the house right over the three of you.
          Adam wants to split sepererately up to really experience the ambience,
          but Sylvie looks less sure and turns to you for a partner to explore.
        </p>
      );
      break;
    case "2":
      content = (
        <p>
          You walk into the mansion alone on a very calm Friday night. The full
          moon is out and you can’t help but feel the house pressing down on
          you, the shadow cast by the moonlight completely envelops you as you
          make your way up the final step and onto the porch. The doors are
          heavy and they creak open, a chilling wail that echoes through the
          empty rooms. You brought your phone in hopes that you can have some
          connection to the outside while you stay here for the night, but the
          signal was been flat since you got on this property. It’s a dead zone.
          You think for a second before taking another step into the void of the
          hallways infront of you, your friends are out drinking in a bar nearby
          to cheer you on, you just left them a few moments ago, you can back
          out of this and join them again, it’s a tempting offer.
        </p>
      );
      break;
    case "3":
      content = (
        <>
          <p>
            You turn around and slip through the door before it closes behind
            you. The stares and whispers follow you as you leave but they never
            quite reach. Back out in the cold night air, you breathe both a sigh
            of relief and disappointment. It's hard not to wonder what might've
            been living in the floorboards and whispered into those walls. Who
            knows what stories the house wanted to tell you, but it doesn't
            matter now. You half-heartedly try to pull the door open once more
            but it doesn't budge. Defeated, you make your way down the overgrown
            driveway and back to the noise and glowing lights of civilization.
          </p>

          <h3>You got the Coward's End</h3>
        </>
      );
      break;
    case "-1":
      content = (<p>
        not done
      </p>)
    default:
      content = <p>ERROR</p>;
  }
  return <div className="story-section">{content}</div>;
}
export default StorySection;
