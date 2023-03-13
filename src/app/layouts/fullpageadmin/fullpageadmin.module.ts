import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FullpageadminComponent } from './fullpageadmin.component';
import { AdminComponent } from '../../modules/admin/admin.component';
import { MaterialModule } from '../../shared/material.module';
import { AdminProductComponent } from '../../modules/admin/admin-product/admin-product.component';
import { AdminProductUpdateComponent } from '../../modules/admin/admin-product-update/admin-product-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminProductAddComponent } from 'src/app/modules/admin/admin-product-add/admin-product-add.component';
import { AdminProducFormComponent } from '../../modules/admin/admin-product-form/admin-product-form.component';
import { AdminMessageComponent } from '../../modules/admin/admin-message/admin-message.component';
import { AdminConfirmDialogComponent } from '../../modules/admin/admin-confirm-dialog/admin-confirm-dialog.component';
import { AdminCategoryComponent } from 'src/app/modules/admin/admin-category/admin-category.component';
import { AdminCategoryAddComponent } from 'src/app/modules/admin/admin-category/admin-category-add/admin-category-add.component';
import { AdminCategoryUpdateComponent } from 'src/app/modules/admin/admin-category/admin-category-update/admin-category-update.component';
import { AdminCategoryFormComponent } from 'src/app/modules/admin/admin-category/admin-category-form/admin-category-form-component';

@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent,
    AdminProductComponent,
    AdminProductUpdateComponent,
    AdminProductAddComponent,
    AdminProducFormComponent,
    AdminMessageComponent,
    AdminConfirmDialogComponent,
    AdminCategoryComponent,
    AdminCategoryAddComponent,
    AdminCategoryUpdateComponent,
    AdminCategoryFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FullpageadminModule { }
