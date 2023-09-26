export interface Icon {
    label: string;
}

export interface Podcast {
    "im:name":        Icon;
    "im:image":       IMImage[];
    summary:          Icon;
    "im:price":       IMPrice;
    "im:contentType": IMContentType;
    rights?:          Icon;
    title:            Icon;
    link:             Link;
    id:               ID;
    "im:artist":      IMArtist;
    category:         Category;
    "im:releaseDate": IMReleaseDate;
}

export interface Category {
    attributes: CategoryAttributes;
}

export interface CategoryAttributes {
    "im:id": string;
    term:    PurpleLabel;
    scheme:  string;
    label:   PurpleLabel;
}

export enum PurpleLabel {
    Music = "Music",
    MusicCommentary = "Music Commentary",
    MusicHistory = "Music History",
    MusicInterviews = "Music Interviews",
}

export interface ID {
    label:      string;
    attributes: IDAttributes;
}

export interface IDAttributes {
    "im:id": string;
}

export interface IMArtist {
    label:       string;
    attributes?: IMArtistAttributes;
}

export interface IMArtistAttributes {
    href: string;
}

export interface IMContentType {
    attributes: IMContentTypeAttributes;
}

export interface IMContentTypeAttributes {
    term:  FluffyLabel;
    label: FluffyLabel;
}

export enum FluffyLabel {
    Podcast = "Podcast",
}

export interface IMImage {
    label:      string;
    attributes: IMImageAttributes;
}

export interface IMImageAttributes {
    height: string;
}

export interface IMPrice {
    label:      IMPriceLabel;
    attributes: IMPriceAttributes;
}

export interface IMPriceAttributes {
    amount:   string;
    currency: Currency;
}

export enum Currency {
    Usd = "USD",
}

export enum IMPriceLabel {
    Get = "Get",
}

export interface IMReleaseDate {
    label:      Date;
    attributes: Icon;
}

export interface Link {
    attributes: LinkAttributes;
}

export interface LinkAttributes {
    rel:   Rel;
    type?: Type;
    href:  string;
}

export enum Rel {
    Alternate = "alternate",
    Self = "self",
}

export enum Type {
    TextHTML = "text/html",
}

// Podcasts details:

interface Genre {
    name: string;
    id: string;
}

interface PodcastDetail {
    country: string;
    artworkUrl600: string;
    feedUrl: string;
    artworkUrl60: string;
    artistViewUrl: string;
    contentAdvisoryRating: string;
    trackViewUrl: string;
    closedCaptioning: string;
    collectionId: number;
    collectionName: string;
    description: string;
    trackId: number;
    trackName: string;
    shortDescription: string;
    releaseDate: string;
    artistIds: number[];
    previewUrl: string;
    episodeUrl: string;
    episodeContentType: string;
    collectionViewUrl: string;
    trackTimeMillis: number;
    episodeFileExtension: string;
    artworkUrl160: string;
    genres: Genre[];
    episodeGuid: string;
    kind: string;
    wrapperType: string;
}
  