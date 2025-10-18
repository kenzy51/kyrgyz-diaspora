import * as Tone from "tone";

export async function successChime() {
  await Tone.start();

  const synth = new Tone.Synth({
    oscillator: { type: "sine" },
    envelope: { attack: 0.01, decay: 0.2, sustain: 0, release: 0.8 },
  }).toDestination();

  // Chord-like success tone
  const now = Tone.now();
  synth.triggerAttackRelease("C5", "8n", now);
  synth.triggerAttackRelease("E5", "8n", now + 0.1);
  synth.triggerAttackRelease("G5", "8n", now + 0.2);
}
