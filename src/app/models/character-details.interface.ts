export interface CharacterSearchResults {
    results: CharacterResult[];
    number_of_total_results?: number;
    status_code: number;
    error?: string;
  }
  export interface CharacterResult {
    id: string;
    name: string;
    real_name: string;
    aliases: string;
    image: string;
    deck: string;
    publisher: string;
  }
  export interface CharacterDetails {
    id?: string;
    name?: string;
    real_name?: string;
    aliases?: string;
    gender?: string;
    origin?: string;
    powers?: string;     // seperated by comma
    abilities?: string;  // seperated by comma
    teams?: string;      // seperated by comma
    friends?: string;    // seperated by comma
    enemies?: string;    // seperated by comma
    first_issue?: string;
    description?: string;
    deck?: string;
    image?: string;
    publisher?: string;
    count_of_issue_appearances?: number;
    status_code: number;
    error?: string;
  }