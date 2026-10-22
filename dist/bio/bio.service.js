"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BioService = void 0;
const common_1 = require("@nestjs/common");
const bio_1 = require("../data/bio");
let BioService = class BioService {
    constructor() {
        this.bio = bio_1.default;
    }
    getAllBio() {
        return this.bio;
    }
};
exports.BioService = BioService;
exports.BioService = BioService = __decorate([
    (0, common_1.Injectable)()
], BioService);
//# sourceMappingURL=bio.service.js.map