import * as typeformEmbed from "@typeform/embed";

export function typeform() {
  const url = "https://rgilpereira.typeform.com/to/pJsbSIXz";
  const options = {
    mode: "drawer_right",
  };
  typeformEmbed.makePopup(url, options).open();
}
