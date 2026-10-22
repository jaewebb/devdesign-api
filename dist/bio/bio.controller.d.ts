import { BioService } from './bio.service';
import type { Bio } from "../types/bio";
export declare class BioController {
    private readonly bioService;
    constructor(bioService: BioService);
    getAllBio(): Bio;
}
