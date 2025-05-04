type BoardFlags = {
  [flagCode: string]: string;
};

export interface Board {
  board: string;
  title: string;
  ws_board: 0 | 1;
  per_page: number;
  pages: number;
  max_filesize: number;
  max_webm_filesize: number;
  max_comment_chars: number;
  max_webm_duration: number;
  bump_limit: number;
  image_limit: number;
  cooldowns: {
    threads: number;
    replies: number;
    images: number;
  };
  meta_description: string;
  spoilers?: 0 | 1;
  custom_spoilers?: number;
  is_archived?: 0 | 1;
  board_flags?: BoardFlags;
  country_flags?: 0 | 1;
  user_ids?: 0 | 1;
  oekaki?: 0 | 1;
  sjis_tags?: 0 | 1;
  code_tags?: 0 | 1;
  math_tags?: 0 | 1;
  text_only?: 0 | 1;
  forced_anon?: 0 | 1;
  webm_audio?: 0 | 1;
  require_subject?: 0 | 1;
  min_image_width?: number;
  min_image_height?: number;
}

export interface BoardList {
  boards: Board[];
}

export interface Thread {
  no: number;
  resto: number;
  sticky?: 0 | 1;
  closed?: 0 | 1;
  now: string;
  time: number;
  name?: string;
  trip?: string;
  id?: string;
  capcode?: 'mod' | 'admin' | 'admin_highlight' | 'manager' | 'developer' | 'founder';  country?: string;
  country_name?: string;
  board_flag?: BoardFlags;
  flag_name?: string;
  sub?: string;
  com?: string;
  tim?: number;
  filename?: string;
  fsize?: number;
  ext?: '.jpg' | '.png' | '.gif' | '.pdf' | '.swf' | '.webm';
  md5?: string;
  w?: number;
  h?: number;
  tn_w?: number;
  tn_h?: number;
  filedeleted ?: 0 | 1;
  spoiler ?: 0 | 1;
  custom_spoiler?: number;
  replies?: number;
  images?: number;
  bumplimit?: 0 | 1;
  imagelimit?: 0 | 1;
  tag?: string;
  semantic_url?: string;
  since4pass?: number;
  unique_ips?: number;
  m_img?: 0 | 1;
}


interface Post {
  posts: Thread[];
}

export interface ThreadIndex {
  threads: Post[];
}


export interface Page {
  page: number;
  threads: Thread[];
}

export interface CatalogThreadPost {
  no: number;
  resto: number;
  sticky?: 1;
  closed?: 1;
  now: string;
  time: number;
  name: string;
  trip?: string;
  id?: string;
  capcode?: 'mod' | 'admin' | 'admin_highlight' | 'manager' | 'developer' | 'founder';
  country?: string;
  country_name?: string;
  sub?: string;
  com?: string;
  tim?: number;
  filename?: string;
  ext?: '.jpg' | '.png' | '.gif' | '.pdf' | '.swf' | '.webm';
  fsize?: number;
  md5?: string;
  w?: number;
  h?: number;
  tn_w?: number;
  tn_h?: number;
  filedeleted?: 1;
  spoiler?: 1;
  custom_spoiler?: number;
  omitted_posts?: number;
  omitted_images?: number;
  replies?: number;
  images?: number;
  bumplimit?: 1;
  imagelimit?: 1;
  last_modified?: number;
  tag?: string;
  semantic_url?: string;
  since4pass?: number;
  unique_ips?: number;
  m_img?: 1;
  last_replies?: CatalogThreadPost[];
}

export interface CatalogPage {
  page: number;
  threads: CatalogThreadPost[];
}

export type Catalog = CatalogPage[];


export interface SingleThread {
  posts: Thread[];
}