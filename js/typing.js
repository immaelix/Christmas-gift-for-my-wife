const letter = `
I believe love should feel steady.
Not dramatic. Not uncertain.

With you, I don’t feel the need to prove anything.
I just feel present.

I imagine a life where we build slowly,
where trust matters more than excitement,
where effort is quiet but consistent.

If things ever feel heavy,
I want to be the man you feel safe leaning on.

This isn’t a promise of perfection.
It’s a promise of staying.

I choose you — calmly, clearly, and fully.
`;

let i = 0;
const speed = 45;
const target = document.getElementById("letter-text");

function typeLetter() {
  if (i < letter.length) {
    target.innerHTML += letter.charAt(i);
    i++;
    setTimeout(typeLetter, speed);
  }
}

typeLetter();
