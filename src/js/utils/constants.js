export const YOUTUBE_URL = "https://www.googleapis.com/youtube/v3";
export const API = {
  GET: {
    SEARCH: "search",
  },
};

export const VIDEOS = {
  SEARCH_MAX_RESULT: 10,
  KEYWORD_HISTORY_LENGTH: 3,
  SAVED_VIDEOS_MAX_COUNT: 100,
  SKELETON_REPEAT_NUMBER: 8,
};

export const STORAGE_NAME = {
  KEYWORDS: "keywords",
  SAVED_VIDEOS: "saved_videos",
};

export const ERROR_MESSAGE = {
  SAVE_COUNT_EXCEEDED_ERROR: "비디오 저장은 100개까지만 가능합니다.",
  SEARCH_ERROR: "동영상을 검색할 수 없습니다",
  INVALID_ACTION_ERROR: "유효하지 않은 동작입니다.",
  CONNOT_FIND_SAVE_BUTTON_ERROR: "cannot find save button",
  CONNOT_FIND_ELEMENT_ERROR: "cannot find element",
};

export const INVALID_DATE = "Invalid Date";
export const NULL_DATE = "----년 --월 --일";