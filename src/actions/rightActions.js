import * as constants from "../constants/right"

export function getClear(name) {
    return {
        type: constants.GET_CLEAR,
        payload: !name
    };
}

export function getApply(name) {
    return {
        type: constants.GET_APPLY,
        payload: !name
    };
}

export function getInfo(sost, index, platform, product) {
    return {
        type: constants.GET_INFO,
        payload: !sost,
        index: index,
        platform: platform,
        product: product
    };
}

export function setRightPlatforms(name) {
    return {
        type: constants.SET_RIGHT_PLAT,
        payload: name,
    };
}

export function setRightProducts(name) {
    return {
        type: constants.SET_RIGHT_PROD,
        payload: name
    };
}

export function setRightTags(tags) {
    return {
        type: constants.SET_RIGHT_TAGS,
        payload: tags
    };
}

export function setRightSearch(str) {
    return {
        type: constants.SET_RIGHT_SEARCH,
        payload: str
    };
}

export function setSort(sost) {
    return {
        type: constants.SET_LEFT_SORT,
        payload: !sost
    };
}


