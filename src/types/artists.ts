export type ArtistTier = 1 | 2 | 3

export interface Artist {
  id: string
  name: string
  image: string
  tier: ArtistTier
}
