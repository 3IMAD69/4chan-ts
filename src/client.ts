import { createFetch } from '@better-fetch/fetch';
import type { BoardList, Catalog, ThreadIndex } from './types';


export class FourChanClient {
  private baseUrl = 'https://a.4cdn.org';
  private imageBaseUrl = 'https://i.4cdn.org';
  private thumbnailBaseUrl = 'https://t.4cdn.org';
  private $fetch = createFetch({
    baseURL: this.baseUrl,
    headers: {
      'Accept': 'application/json'
    },
    retry: {
      type: "linear",
      attempts: 3,
      delay: 1200
    }

  });

  /**
   * Get a list of all boards
   */
  async getBoards() {
    return this.$fetch<BoardList>('/boards.json');
    // return error ? { data: null, error } : { data, error: null };
  }

  /**
   * Get a list of all threads+attributes on a board. Every thread is grouped by page
   * @param board Board name (e.g., 'g', 'v', 'a', etc.)
   */
  async getCatalog(board: string) {
    if (!board) return { data: null, error: { message: 'Board name is required', status: 400, statusText: 'Bad Request' } };

    return this.$fetch<Catalog>(`/${board}/catalog.json`);

    // return error ? { data: null, error } : { data, error: null };
  }

  /**
    * Get a representation of a single index page, which includes each thread on that specific page and the preview replies.
    * @param board Board name (e.g., 'g', 'v', 'a', etc.)
    * @param page Page number (e.g., 1, 2, 3, etc.)
   **/
  async getIndexes(board : string , page : number) {
    if (!board || !page) return { data: null, error: { message: 'Board name or page number is missing', status: 400, statusText: 'Bad Request' } };

    return this.$fetch<ThreadIndex>(`/${board}/${page}.json`);

  }


  /**
   * Get a representation of a single OP and all the replies, which form a thread.
   * @param board Board name (e.g., 'g', 'v', 'a', etc.)
   * @param id Thread ID (e.g., 123456)
   */
  async getThread(board : string , id : number) {
    if (!board || !id) return { data: null, error: { message: 'Board name or thread ID is missing', status: 400, statusText: 'Bad Request' } };

   return this.$fetch<ThreadIndex>(`/${board}/thread/${id}.json`);

  }


}