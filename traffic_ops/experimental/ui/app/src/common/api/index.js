module.exports = angular.module('trafficOps.api', [])
    .service('authService', require('./AuthService'))
    .service('cacheGroupService', require('./CacheGroupService'))
    .service('cdnService', require('./CDNService'))
    .service('deliveryServiceService', require('./DeliveryServiceService'))
    .service('divisionService', require('./DivisionService'))
    .service('httpService', require('./HttpService'))
    .service('locationService', require('./LocationService'))
    .service('locationService', require('./LocationService'))
    .service('profileService', require('./ProfileService'))
    .service('roleService', require('./RoleService'))
    .service('regionService', require('./RegionService'))
    .service('serverService', require('./ServerService'))
    .service('statusService', require('./StatusService'))
    .service('tenantService', require('./TenantService'))
    .service('typeService', require('./TypeService'))
    .service('trafficOpsService', require('./TrafficOpsService'))
    .service('userService', require('./UserService'))
;