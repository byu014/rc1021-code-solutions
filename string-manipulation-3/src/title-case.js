/* exported titleCase */
function titleCase(title) {
  let split = title.split(': ');
  let mainTitle = split[0].split(' ');
  let subTitle = null;
  let blacklist = {
    and: true,
    or: true,
    nor: true,
    but: true,
    a: true,
    an: true,
    the: true,
    as: true,
    at: true,
    by: true,
    for: true,
    in: true,
    of: true,
    on: true,
    per: true,
    to: true
  };
  let specialCase = {
    Javascript: 'JavaScript',
    Api: 'API'
  };

  loop(mainTitle, specialCase, blacklist);
  split[0] = mainTitle.join(' ');

  if (split.length === 2) {
    subTitle = split[1].split(' ');
    loop(subTitle, specialCase, blacklist);
    split[1] = subTitle.join(' ');
  }
  return split.length === 2 ? split.join(': ') : split.join('');
}

function loop(title, specialCase, blacklist) {
  for (let i = 0; i < title.length; i++) {
    let word = title[i];
    if (blacklist[word]) {
      if (i !== 0) {
        continue;
      }
    }
    title[i] = word[0].toUpperCase() + word.substring(1, word.length);
    if (specialCase[title[i]]) {
      title[i] = specialCase[title[i]];
    }
    let dashIndex = title[i].indexOf('-');
    if (dashIndex >= 0) {
      title[i] = dashFix(title[i], dashIndex);
    }
  }
}

function dashFix(title, index) {
  let splitDash = title.split('-');
  splitDash[1] = splitDash[1][0].toUpperCase() + splitDash[1].substring(1, splitDash[1].length);
  return splitDash.join('-');
}
// 'The Document: A Documentary' dash-guy
