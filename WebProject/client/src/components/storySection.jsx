import React from "react";

function StorySection(props) {
  let content;
  switch (props.section) {
    case "0":
      content = (
        <p>
          The night is clear on the day you stumble upon the artifact. Its inky,
          smooth surface reflects the stars in the sky as if it itself is
          another galaxy moulded to fit in between its walls. You don't know how
          you got here or why this thing keeps drawing you in but you reach out
          nonetheless. The fear of the unknown and buzzing of the cicadas all
          stop, it's just you and this thing. You and it.
        </p>
      );
      break;
    case "1":
      content = (
        <p>
          Your hands close around it, it’s warm but only on the surface. It
          doesn’t emanate heat, it is warm, and nothing else. And truly nothing
          else because the chill of the night suddenly envelopes you, the
          shivers wracking up your spine are so strong that it almost takes your
          legs out from under you. It wasn't this cold when you first arrived
          here, but it’s hard for you to truly say this, that was so long ago.
          And shaking as you are, your hand is still gripped firmly on this
          stone. It’s telling you to come closer and lend an ear, there’s a
          story it wants to tell you, and there are people it wants you to meet.
        </p>
      );
      break;
    case "2":
      content = (
        <p>
          You take a step back, it’s difficult but manage. You take another,
          this time it’s easier the stone doesn’t shine as brightly anymore. By
          the time you’ve walked far back enough that the stone is but a dot in
          your vision you realize you have nowhere to go. You cannot turn
          around, you cannot stop staring at the stone. You reach a hand out
          behind you, there is only empty space and a biting chill. Your fingers
          feel frostbitten when you pull it back towards you. You want to see
          what’s waiting behind you but you cannot turn around, you cannot stop
          looking at the stone. The chill you felt claw through your fingertips
          is now buffetting against your back. Your hair and your clothes don’t
          move an inch but the wind feels like a whip, lashing icey tendrils
          against you.
        </p>
      );
      break;
    case "3":
      content = (
        <p>
          The cold doesn’t subside, it torrents against you. No longer 
          just your back; you can’t feel your fingers or toes anymore. 
          You think you’re standing but you aren’t quite sure. The air 
          freezes your nose, and your throat, and by the time you take 
          your third breath everything down and into your lungs has frozen. You are frozen where you stand, you cannot move, you cannot breath, you cannot live. 
        </p>
      );
      break;
    default:
      content = <p>ERROR</p>;
  }
  return <div className="story-section">{content}</div>;
}
export default StorySection;
