export interface SpaceFlight {
  flight_number: number;
  mission_name: string;
  mission_id: unknown[];
  upcoming: boolean;
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: number;
  rocket: Rocket;
  ships: unknown[];
  telemetry: Telemetry;
  launch_site: LaunchSite;
  launch_success: boolean;
  launch_failure_details: LaunchFailureDetails;
  links: Links;
  details: string;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  timeline: Timeline;
  crew: null | unknown;
}

export interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  first_stage: FirstStage;
  second_stage: SecondStage;
  fairings: Fairings;
}

export interface FirstStage {
  cores: Core[];
}

export interface Core {
  core_serial: string;
  flight: number;
  block: unknown;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  land_success: unknown;
  landing_intent: boolean;
  landing_type: unknown;
  landing_vehicle: unknown;
}

export interface SecondStage {
  block: number;
  payloads: Payload[];
}

export interface Payload {
  payload_id: string;
  norad_id: unknown[];
  reused: boolean;
  customers: string[];
  nationality: string;
  manufacturer: string;
  payload_type: string;
  payload_mass_kg: number;
  payload_mass_lbs: number;
  orbit: string;
  orbit_params: OrbitParams;
}

export interface OrbitParams {
  reference_system: string;
  regime: string;
  longitude: unknown;
  semi_major_axis_km: unknown;
  eccentricity: unknown;
  periapsis_km: number;
  apoapsis_km: number;
  inclination_deg: number;
  period_min: unknown;
  lifespan_years: unknown;
  epoch: unknown;
  mean_motion: unknown;
  raan: unknown;
  arg_of_pericenter: unknown;
  mean_anomaly: unknown;
}

export interface Fairings {
  reused: boolean;
  recovery_attempt: boolean;
  recovered: boolean;
  ship: unknown;
}

export interface Telemetry {
  flight_club: unknown;
}

export interface LaunchSite {
  site_id: string;
  site_name: string;
  site_name_long: string;
}

export interface LaunchFailureDetails {
  time: number;
  altitude: unknown;
  reason: string;
}

export interface Links {
  mission_patch: string;
  mission_patch_small: string;
  reddit_campaign: unknown;
  reddit_launch: unknown;
  reddit_recovery: unknown;
  reddit_media: unknown;
  presskit: unknown;
  article_link: string;
  wikipedia: string;
  video_link: string;
  youtube_id: string;
  flickr_images: unknown[];
}

export interface Timeline {
  webcast_liftoff: number;
}
