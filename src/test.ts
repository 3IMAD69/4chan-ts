import { FourChanClient } from "./index";


(async ()=>{
  const chan = new FourChanClient();

  const {data , error } = await chan.getThread("g", 123456789);
  if (error)
  {
    console.error(error);
    return ;
  }
  console.log(data);
})