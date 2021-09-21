"use strict";

const JS_CONSTANTS = {
  KANARY_PRIVACY_LINK: "https://www.thekanary.com/privacy_and_security",
  REMOVAL_SITES: [
    "anywho.com",
    "backgroundalert.com",
    "beenverified.com",
    "checkpeople.com",
    "checkthem.com",
    "clustrmaps.com",
    "cocofinder.com",
    "cyberbackgroundchecks.com",
    "dobsearch.com",
    "emailsherlock.com",
    "familytreenow.com",
    "fastpeoplesearch.com",
    "freepeopledirectory.com",
    "homemetry.com",
    "hpccusa.com",
    "infotracer.com",
    "instantcheckmate.com",
    "intelius.com",
    "kiwisearches.com",
    "locatepeople.com",
    "mylife.com",
    "neighborwho.com",
    "nuwber.com",
    "peekyou.com",
    "peoplefinders.com",
    "pplcheck.com",
    "publicdatadigger.com",
    "publicdatausa.com",
    "publicemailrecords.com",
    "publicinfoservices.com",
    "publicrecordsnow.com",
    "radaris.com",
    "searchpeoplefree.com ",
    "searchquarry.com ",
    "smartbackgroundchecks.com",
    "socialcatfish.com",
    "spokeo.com",
    "spydialer.com",
    "spyfly.com",
    "thatsthem.com",
    "truthfinder.com",
    "unmask.com",
    "usphonebook.com",
    "ussearch.com",
    "veripages.com",
    "whitepages.com",
    "xlek.com",
    "yellowbook.com",
    "zabasearch.com",
    "peoplebyname.com",
  ],
  REMOVAL_STATUSES: {
    READY_TO_REMOVE: "READY_TO_REMOVE",
    REQUEST_SUBMITTED: "REQUEST_SUBMITTED",
    SITE_RESPONDED: "SITE_RESPONDED",
    ADDITIONAL_INFORMATION_NEEDED: "ADDITIONAL_INFORMATION_NEEDED",
    ESCALATING_REQUEST: "ESCALATING_REQUEST",
    VERIFYING_REMOVAL: "VERIFYING_REMOVAL",
    REMOVAL_VERIFIED: "REMOVAL_VERIFIED",
    BLOCKED: "BLOCKED",
  },
};

module.exports = Object.freeze(JS_CONSTANTS);
