"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillService = void 0;
const common_1 = require("@nestjs/common");
const skills_1 = require("../data/skills");
const skillTypes_1 = require("../data/skillTypes");
let SkillService = class SkillService {
    constructor() {
        this.skills = skills_1.default;
        this.skillTypes = skillTypes_1.default;
    }
    getAllSkills() {
        return this.skills;
    }
    getAllSkillTypes() {
        return this.skillTypes;
    }
};
exports.SkillService = SkillService;
exports.SkillService = SkillService = __decorate([
    (0, common_1.Injectable)()
], SkillService);
//# sourceMappingURL=skill.service.js.map