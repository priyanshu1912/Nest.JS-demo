import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards, UsePipes} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dtos/CreateCat.dto';
import { AuthGuard } from './guards/auth/auth.guard';
import { createCatSchema } from './joiSchema/CreateCat.schema';
import { JoiValidationPipe } from './pipe/joi-validation/joi-validation.pipe';

@Controller('cat')
@UseGuards(AuthGuard)
export class CatController {
    constructor(private readonly catService: CatService){}

    @Get()
    fetchCats() {
        return this.catService.fetchCatService()
    }

    @Get('search')
    searchCat(@Query('age_lte', ParseIntPipe) minAge: number, @Query('age_gte', ParseIntPipe) maxAge:number) {
        return this.catService.fetchCatServiceWithRange(minAge,maxAge)
    }
    
    @Get(':id')
    fetchCatWithId(@Param('id', ParseIntPipe) catId:number) {
        return this.catService.fetchCatServiceWithId(catId)
    }
    
    @Post()
    @UsePipes(new JoiValidationPipe(createCatSchema))
    createCat(@Body() createCatDto: CreateCatDto) {
        return this.catService.createCatService(createCatDto)
    }

    @Delete(':id')
    deleteCat(@Param('id', ParseIntPipe) catId:number) {
        return this.catService.deleteCatService(catId)
    }

    @Patch(":id")
    updateCat(@Param("id", ParseIntPipe) catId:number, @Body() body ) {
        return this.catService.updateCatService(catId,body)
    }
}
