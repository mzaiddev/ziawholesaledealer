import {
  MdHistory,
  MdFlightTakeoff,
  MdSell,
  MdVerified,
  MdLocalShipping,
  MdSupportAgent,
  MdWorkspacePremium,
  MdPublic,
  MdInventory,
  MdVerifiedUser,
  MdShield,
  MdRuleFolder,
  MdElectricBolt,
  MdAccountBalance,
  MdHandshake,
  MdSettings,
  MdGpsFixed,
  MdVisibility,
  MdCheckCircle,
  MdFactCheck,
  MdTune,
  MdClose,
  MdFavorite,
  MdSort,
  MdChevronLeft,
  MdChevronRight,
  MdSearch,
  MdWarehouse,
  MdScience,
  MdArrowForward,
  MdHighQuality,
  MdSchool,
  MdBusiness,
  MdDomain,
  MdInfo,
  MdShare,
  MdAlternateEmail,
  MdCall,
  MdLocationOn,
  MdPhone,
  MdMail,
  MdHome,
  MdLaptop,
  MdMenu,
  MdSecurity,
  MdBuild,
} from "react-icons/md";

const iconMap = {
  history_edu: MdHistory,
  flight_takeoff: MdFlightTakeoff,
  sell: MdSell,
  verified: MdVerified,
  local_shipping: MdLocalShipping,
  support_agent: MdSupportAgent,
  workspace_premium: MdWorkspacePremium,
  public: MdPublic,
  inventory_2: MdInventory,
  verified_user: MdVerifiedUser,
  shield_with_heart: MdShield,
  rule_folder: MdRuleFolder,
  bolt: MdElectricBolt,
  account_balance: MdAccountBalance,
  handshake: MdHandshake,
  precision_manufacturing: MdBuild,
  target: MdGpsFixed,
  visibility: MdVisibility,
  check_circle: MdCheckCircle,
  fact_check: MdFactCheck,
  tune: MdTune,
  close: MdClose,
  favorite: MdFavorite,
  sort: MdSort,
  chevron_left: MdChevronLeft,
  chevron_right: MdChevronRight,
  search: MdSearch,
  warehouse: MdWarehouse,
  biotech: MdScience,
  arrow_forward: MdArrowForward,
  settings: MdSettings,
  high_quality: MdHighQuality,
  school: MdSchool,
  corporate_fare: MdBusiness,
  domain: MdDomain,
  info: MdInfo,
  share: MdShare,
  alternate_email: MdAlternateEmail,
  call: MdCall,
  location_on: MdLocationOn,
  phone: MdPhone,
  mail: MdMail,
  home: MdHome,
  laptop_mac: MdLaptop,
  support: MdSupportAgent,
  menu: MdMenu,
};

export default function MaterialIcon({
  name,
  className = "",
  fill,
  style,
  ...rest
}) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`MaterialIcon: "${name}" not found in icon map`);
    return (
      <span
        className={`inline-block ${className}`}
        style={{ width: "1em", height: "1em", ...style }}
        {...rest}
      >
        ?
      </span>
    );
  }

  // fill prop: 0 = outlined, 1 = filled (some MD icons have two variants)
  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      style={{ lineHeight: 1, ...style }}
      {...rest}
    >
      <IconComponent />
    </span>
  );
}