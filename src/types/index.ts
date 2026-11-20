/**
 * Shared type definitions for the front-end dummy data
 * (see src/assets/assets_frontend/assets.ts).
 */

/**
 * Static image assets used across the UI.
 * Each value is the resolved URL string Vite produces for an imported image.
 */
export interface Assets {
  appointment_img: string;
  header_img: string;
  group_profiles: string;
  logo: string;
  chats_icon: string;
  verified_icon: string;
  info_icon: string;
  profile_pic: string;
  arrow_icon: string;
  contact_image: string;
  about_image: string;
  menu_icon: string;
  cross_icon: string;
  dropdown_icon: string;
  upload_icon: string;
  stripe_logo: string;
  razorpay_logo: string;
}

/** The areas in which companions are available. */
export type LocationName =
  | "Newcastle upon Tyne"
  | "Gateshead"
  | "Sunderland"
  | "Durham"
  | "South Shields"
  | "Tynemouth";

/** An entry in the "browse by location" menu. */
export interface LocationItem {
  location: LocationName;
  /** Image URL for the location's icon. */
  image: string;
}

/** A companion's postal address. */
export interface Address {
  line1: string;
  line2: string;
}

/** A bookable companion. */
export interface Companion {
  _id: string;
  name: string;
  /** Image URL for the companion's profile photo. */
  image: string;
  location: LocationName;
  /** Human-readable experience, e.g. "4 Years". */
  experience: string;
  about: string;
  /** Booking fee. */
  fees: number;
  address: Address;
}
