import { PortfolioItemService } from './portfolioItem.service';
import type { PortfolioItem } from "../types/portfolioItem";
export declare class PortfolioItemController {
    private readonly portfolioItemService;
    constructor(portfolioItemService: PortfolioItemService);
    getAllPortfolioItems(): PortfolioItem[];
}
