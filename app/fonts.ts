import { Josefin_Sans, Montserrat, Open_Sans, Roboto, Figtree} from "next/font/google";

export const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  weight: "variable",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "variable",
});


export const roboto = Roboto({
  subsets: ["latin"],
  weight:["100", "300", "400", "500", "700", "900"]
});

export const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: "variable",
})

export const figtree = Figtree({
  subsets: ["latin"],
  weight: "variable"
})