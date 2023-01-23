import { Jost, DM_Serif_Display } from "@next/font/google";

const jost = Jost({ subsets: ['latin'], weight: ['100','200','300','400','500','600','700','800','900']});
const dmserif = DM_Serif_Display({ subsets: ['latin', 'latin-ext'], weight: '400'});

const fonts = {
  jost: jost.className,
  dmserif: dmserif.className,
}

export default fonts