import { FourChanClient } from "./index";

async function main () {

  const chan = new FourChanClient();

  const {data , error } = await chan.getBoards();
  if (error)
  {
    console.error(error);
    return ;
  }
  data.boards.forEach((board) => {
    console.log(`Board: ${board.board} - Title: ${board.title}`);
  });

}

main()