import { AppConfig } from '../../conf'

export const propertyFieldMap = {
    India: {
        keyToGeoData: 'st_nm',
        width: 450,
        height: 450
    },
    state: {
        keyToGeoData: 'district',
        width: 400,
        height: 400
    },
};

export const mapMeta = {
    India: {
        name: 'India',
        geoDataFile: `${AppConfig.baseTopo}/india.json`,
        mapType: 'country',
        graphObjectName: 'india',
    },
    'Andaman and Nicobar Islands': {
        name: 'Andaman and Nicobar Islands',
        geoDataFile: `${AppConfig.baseTopo}/andamannicobarislands.json`,
        mapType: 'state',
        graphObjectName: 'andamannicobarislands_district',
    },
    'Arunachal Pradesh': {
        name: 'Arunachal Pradesh',
        geoDataFile: `${AppConfig.baseTopo}/arunachalpradesh.json`,
        mapType: 'state',
        graphObjectName: 'arunachalpradesh_district',
    },
    'Andhra Pradesh': {
        name: 'Andhra Pradesh',
        geoDataFile: `${AppConfig.baseTopo}/andhrapradesh.json`,
        mapType: 'state',
        graphObjectName: 'andhrapradesh_district',
    },
    Assam: {
        name: 'Assam',
        geoDataFile: `${AppConfig.baseTopo}/assam.json`,
        mapType: 'state',
        graphObjectName: 'assam_district',
    },
    Bihar: {
        name: 'Bihar',
        geoDataFile: `${AppConfig.baseTopo}/bihar.json`,
        mapType: 'state',
        graphObjectName: 'bihar_district',
    },
    Chhattisgarh: {
        name: 'Chhattisgarh',
        geoDataFile: `${AppConfig.baseTopo}/chhattisgarh.json`,
        mapType: 'state',
        graphObjectName: 'chhattisgarh_district',
    },
    Delhi: {
        name: 'Delhi',
        geoDataFile: `${AppConfig.baseTopo}/delhi.json`,
        mapType: 'state',
        graphObjectName: 'delhi_district',
    },
    Karnataka: {
        name: 'Karnataka',
        geoDataFile: `${AppConfig.baseTopo}/karnataka.json`,
        mapType: 'state',
        graphObjectName: 'karnataka_district',
    },
    Kerala: {
        name: 'Kerala',
        geoDataFile: `${AppConfig.baseTopo}/kerala.json`,
        mapType: 'state',
        graphObjectName: 'kerala_district',
    },
    Goa: {
        name: 'Goa',
        geoDataFile: `${AppConfig.baseTopo}/goa.json`,
        mapType: 'state',
        graphObjectName: 'goa_district',
    },
    Gujarat: {
        name: 'Gujarat',
        geoDataFile: `${AppConfig.baseTopo}/gujarat.json`,
        mapType: 'state',
        graphObjectName: 'gujarat_district',
    },
    Haryana: {
        name: 'Haryana',
        geoDataFile: `${AppConfig.baseTopo}/haryana.json`,
        mapType: 'state',
        graphObjectName: 'haryana_district',
    },
    'Himachal Pradesh': {
        name: 'Himachal Pradesh',
        geoDataFile: `${AppConfig.baseTopo}/himachalpradesh.json`,
        mapType: 'state',
        graphObjectName: 'himachalpradesh_district',
    },
    'Jammu and Kashmir': {
        name: 'Jammu and Kashmir',
        geoDataFile: `${AppConfig.baseTopo}/jammukashmir.json`,
        mapType: 'state',
        graphObjectName: 'jammukashmir_district',
    },
    Jharkhand: {
        name: 'Jharkhand',
        geoDataFile: `${AppConfig.baseTopo}/jharkhand.json`,
        mapType: 'state',
        graphObjectName: 'jharkhand_district',
    },
    Ladakh: {
        name: 'Ladakh',
        geoDataFile: `${AppConfig.baseTopo}/ladakh.json`,
        mapType: 'state',
        graphObjectName: 'ladakh_district',
    },
    'Madhya Pradesh': {
        name: 'Madhya Pradesh',
        geoDataFile: `${AppConfig.baseTopo}/madhyapradesh.json`,
        mapType: 'state',
        graphObjectName: 'madhyapradesh_district',
    },
    Maharashtra: {
        name: 'Maharashtra',
        geoDataFile: `${AppConfig.baseTopo}/maharashtra.json`,
        mapType: 'state',
        graphObjectName: 'maharashtra_district',
    },
    Manipur: {
        name: 'Manipur',
        geoDataFile: `${AppConfig.baseTopo}/manipur.json`,
        mapType: 'state',
        graphObjectName: 'manipur_pre2016_districts',
    },
    Meghalaya: {
        name: 'Meghalaya',
        geoDataFile: `${AppConfig.baseTopo}/meghalaya.json`,
        mapType: 'state',
        graphObjectName: 'meghalaya_district',
    },
    Mizoram: {
        name: 'Mizoram',
        geoDataFile: `${AppConfig.baseTopo}/mizoram.json`,
        mapType: 'state',
        graphObjectName: 'mizoram_district',
    },
    Nagaland: {
        name: 'Nagaland',
        geoDataFile: `${AppConfig.baseTopo}/nagaland.json`,
        mapType: 'state',
        graphObjectName: 'nagaland_district',
    },
    Odisha: {
        name: 'Odisha',
        geoDataFile: `${AppConfig.baseTopo}/odisha.json`,
        mapType: 'state',
        graphObjectName: 'odisha_district',
    },
    Punjab: {
        name: 'Punjab',
        geoDataFile: `${AppConfig.baseTopo}/punjab.json`,
        mapType: 'state',
        graphObjectName: 'punjab_district',
    },
    Rajasthan: {
        name: 'Rajasthan',
        geoDataFile: `${AppConfig.baseTopo}/rajasthan.json`,
        mapType: 'state',
        graphObjectName: 'rajasthan_district',
    },
    Sikkim: {
        name: 'Sikkim',
        geoDataFile: `${AppConfig.baseTopo}/sikkim.json`,
        mapType: 'state',
        graphObjectName: 'sikkim_district',
    },
    'Tamil Nadu': {
        name: 'Tamil Nadu',
        geoDataFile: `${AppConfig.baseTopo}/tamil-nadu.json`,
        mapType: 'state',
        graphObjectName: 'tamilnadu_district',
    },
    Telangana: {
        name: 'Telangana',
        geoDataFile: `${AppConfig.baseTopo}/telugana.json`,
        mapType: 'state',
        graphObjectName: 'telugana',
    },
    Tripura: {
        name: 'Tripura',
        geoDataFile: `${AppConfig.baseTopo}/tripura.json`,
        mapType: 'state',
        graphObjectName: 'tripura_district',
    },
    Uttarakhand: {
        name: 'Uttarakhand',
        geoDataFile: `${AppConfig.baseTopo}/uttarakhand.json`,
        mapType: 'state',
        graphObjectName: 'uttarakhand_district',
    },
    'Uttar Pradesh': {
        name: 'Uttar Pradesh',
        geoDataFile: `${AppConfig.baseTopo}/uttarpradesh.json`,
        mapType: 'state',
        graphObjectName: 'uttarpradesh_district',
    },

    'West Bengal': {
        name: 'West Bengal',
        geoDataFile: `${AppConfig.baseTopo}/westbengal.json`,
        mapType: 'state',
        graphObjectName: 'westbengal_district',
    },
};
