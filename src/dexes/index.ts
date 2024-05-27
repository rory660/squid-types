export interface Dex {
  name: DexName;
  chainId: string;
  type: DexType;
  properties: Record<string, any>;
  logoURI: string;
}

// identifiers for dexes
export enum DexName {
  AGNI_V3 = "Agni V3",
  AERODROME_SOLIDLY = "Aerodrome Solidly",
  AERODROME_V3 = "Aerodrome V3",
  APESWAP_V2 = "Apeswap V2",
  APESWAP_V3 = "Apeswap V3",
  BALANCER_V2 = "Balancer V2",
  BASESWAP_V2 = "Baseswap V2",
  BASESWAP_V3 = "Baseswap V3",
  BEAMSWAP_V2 = "Beamswap V2",
  BEAMSWAP_V3 = "Beamswap V3",
  CAMELOT_V3 = "Camelot V3",
  CURVE_V2 = "Curve V2",
  ELLIPSIS = "Ellipsis",
  EQUILIBRE = "Equilibre",
  EQUALIZER = "Equalizer",
  FUSIONX_V2 = "FusionX V2",
  FUSIONX_V3 = "FusionX V3",
  GMX = "GMX",
  HORIZON_V2 = "Horizon V2",
  HORIZON_V3 = "Horizon V3",
  KYBERSWAP = "KyberSwap",
  KYBERSWAP_AGGREGATOR = "kyberswap Aggregator",
  KINETIX_V3 = "Kinetix V3",
  MENTO_V2 = "Mento V2",
  OPENOCEAN = "OpenOcean",
  OSMOSIS = "Osmosis",
  PANCAKESWAP_V2 = "Pancakeswap V2",
  PANCAKESWAP_V3 = "Pancakeswap V3",
  PANCAKESWAP_STABLE = "Pancakeswap Stable",
  PANGOLIN_V2 = "Pangolin V2",
  PLATYPUS = "Platypus",
  QUICKSWAP_V2 = "Quickswap V2",
  QUICKSWAP_V3 = "Quickswap V3",
  RAMSES_SOLIDLY = "Ramses Solidly",
  RAMSES_V3 = "Ramses V3",
  SPOOKYSWAP_V2 = "Spookyswap V2",
  STELLASWAP_V2 = "Stellaswap V2",
  STELLASWAP_V3 = "Stellaswap V3",
  STELLASWAP_SADDLE = "Stellaswap Saddle",
  SUSHISWAP_V2 = "Sushiswap V2",
  SUSHISWAP_V3 = "Sushiswap V3",
  SWAPBASED_V2 = "Swapbased V2",
  SYNTHSWAP_V2 = "SynthSwap V2",
  SYNTHSWAP_V3 = "SynthSwap V3",
  SKYDROME = "Skydrome",
  THENA_SOLIDLY = "Thena Solidly",
  THENA_V3 = "Thena V3",
  TRADERJOE_V2 = "Trader Joe V2",
  TRIDENT = "Trident",
  THRUSTER_V3 = "Thruster V3",
  UBESWAP_V2 = "Ubeswap V2",
  UBESWAP_V3 = "Ubeswap V3",
  UNISWAP_V2 = "Uniswap V2",
  UNISWAP_V3 = "Uniswap V3",
  WAGMI_V3 = "Wagmi V3",
  WIGOSWAP_V2 = "Wigoswap V2",
  WOMBAT = "Wombat",
  VELODROME_SOLIDLY = "Velodrome Solidly",
  VELODROME_V2 = "Velodrome V2",
  VELODROME_V3 = "Velodrome V3",
  VELOCIMETER = "Velocimeter",
  ZYBERSWAP_V2 = "Zyberswap V2",
  ZYBERSWAP_V3 = "Zyberswap V3",
}

// identifiers dex adapters
export enum DexType {
  // EVM
  ALGEBRA = "algebra",
  BALANCER_V2 = "balancer-v2",
  CURVE = "curve",
  GMX = "gmx",
  KYBERSWAP_ELASTIC = "kyberswap-elastic",
  PLATYPUS = "platypus",
  PANCAKESWAP_STABLE = "pancakeswap-stable",
  SADDLE = "saddle",
  SLIPSTREAM = "slipstream",
  SOLIDLY = "solidly",
  TRIDENT = "trident",
  WOMBAT = "wombat",
  UNISWAP_V2 = "uniswap-v2",
  UNISWAP_V3 = "uniswap-v3",
  MENTO_V2 = "mento-v2",
  // COSMOS
  OSMOSIS = "osmosis",

  // ONCE WE START ADDING DEXES WE WILL BE MOVING THEM ABOVE
  /*
  DUALITY = "Duality",
  */
}
