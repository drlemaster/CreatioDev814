define("UsrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "71941c43-63c6-473c-843d-51368b926574",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "ButtonAddVisit",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ButtonAddVisit_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrAddRealtyVisitsProcess",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyIDParameter"
						}
					},
					"clickMode": "default"
				},
				"parentName": "MainHeaderBottom",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PriceUSD",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPriceUSD_tlns3mn",
					"labelPosition": "auto",
					"control": "$PDS_UsrPriceUSD_tlns3mn",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_ogqidqe",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_ogqidqe"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommission_e22zi1j",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommission_e22zi1j",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_7w07x9y",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_7w07x9y",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_foxl7d8",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_foxl7d8_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Type",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_x6golu4",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_x6golu4",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_8b4l0gx",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_8b4l0gx_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_11yowub",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_a2tt7ux",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_a2tt7ux",
					"multiline": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_y600lbh",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_y600lbh_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_924l6u7",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_y600lbh",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_dt7dmmn",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_924l6u7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_ihefpne",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_ihefpne_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$UsrParentRealty"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_dt7dmmn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_sjf6a8e",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_sjf6a8e_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_9ipdkx1DS"
						}
					}
				},
				"parentName": "FlexContainer_dt7dmmn",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_wej4wj8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_wej4wj8_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_dt7dmmn",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_eaezwor",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_eaezwor_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGrid"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_wej4wj8",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_596p25t",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_596p25t_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_wej4wj8",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_kvbw2yr",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_kvbw2yr_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_kvbw2yr_GridDetail_9ipdkx1",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_9ipdkx1"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_kvbw2yr_SearchValue",
							"GridDetailSearchFilter_kvbw2yr_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_dt7dmmn",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_6beafxf",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_y600lbh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitGrid",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_9ipdkx1",
					"activeRow": "$GridDetail_9ipdkx1_ActiveRow",
					"selectionState": "$GridDetail_9ipdkx1_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_9ipdkx1_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_9ipdkx1DS_Id",
					"columns": [
						{
							"id": "13ddcb19-4cd7-3d0c-955b-baa835a4a918",
							"code": "GridDetail_9ipdkx1DS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_9ipdkx1DS_UsrVisitDateTime)#",
							"dataValueType": 7,
							"width": 192
						},
						{
							"id": "2e79dabd-ec3f-634b-7c13-70392fe86a40",
							"code": "GridDetail_9ipdkx1DS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_9ipdkx1DS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"width": 170
						},
						{
							"id": "464ff4a1-559d-efb2-f81e-e78798e8d2d0",
							"code": "GridDetail_9ipdkx1DS_UsrOwner",
							"caption": "#ResourceString(GridDetail_9ipdkx1DS_UsrOwner)#",
							"dataValueType": 10,
							"width": 122
						},
						{
							"id": "d0c1ebfe-2f11-e756-4edd-c05a049c8c48",
							"code": "GridDetail_9ipdkx1DS_UsrComment",
							"caption": "#ResourceString(GridDetail_9ipdkx1DS_UsrComment)#",
							"dataValueType": 28,
							"width": 186
						},
						{
							"id": "04bf3879-72ba-bc14-0dc5-49f9e5ab29ac",
							"code": "GridDetail_9ipdkx1DS_CreatedOn",
							"caption": "#ResourceString(GridDetail_9ipdkx1DS_CreatedOn)#",
							"dataValueType": 7,
							"width": 140
						},
						{
							"id": "d721656b-4775-c454-38d3-fae5132f37f2",
							"code": "GridDetail_9ipdkx1DS_UsrParentRealty",
							"caption": "#ResourceString(GridDetail_9ipdkx1DS_UsrParentRealty)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_6beafxf",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_9ipdkx1_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_9ipdkx1DS",
							"filters": "$GridDetail_9ipdkx1 | crt.ToCollectionFilters : 'GridDetail_9ipdkx1' : $GridDetail_9ipdkx1_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_9ipdkx1_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealtyVisitGrid",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_9ipdkx1_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_9ipdkx1DS",
							"filters": "$GridDetail_9ipdkx1 | crt.ToCollectionFilters : 'GridDetail_9ipdkx1' : $GridDetail_9ipdkx1_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_9ipdkx1_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_9ipdkx1_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_9ipdkx1_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGrid",
							"filters": "$GridDetail_9ipdkx1 | crt.ToCollectionFilters : 'GridDetail_9ipdkx1' : $GridDetail_9ipdkx1_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_9ipdkx1_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGrid",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_9ipdkx1_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_9ipdkx1DS",
							"filters": "$GridDetail_9ipdkx1 | crt.ToCollectionFilters : 'GridDetail_9ipdkx1' : $GridDetail_9ipdkx1_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_9ipdkx1_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGrid",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPriceUSD_tlns3mn": {
						"modelConfig": {
							"path": "PDS.UsrPriceUSD"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 0,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_ogqidqe": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 0,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrType_7w07x9y": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_x6golu4": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_a2tt7ux": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
                      "validators": {
                          /* Flag the field as required. */
                    "required": {
                        "type": "crt.Required"
                            }
                        }
					},
					"PDS_UsrOfferTypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent"
						}
					},
					"PDS_UsrCommission_e22zi1j": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"GridDetail_9ipdkx1": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_9ipdkx1DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_kvbw2yr_GridDetail_9ipdkx1",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrComment"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_9ipdkx1DS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_9ipdkx1DS.UsrVisitDateTime"
									}
								},
								"GridDetail_9ipdkx1DS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_9ipdkx1DS.UsrPotentialCustomer"
									}
								},
								"GridDetail_9ipdkx1DS_UsrOwner": {
									"modelConfig": {
										"path": "GridDetail_9ipdkx1DS.UsrOwner"
									}
								},
								"GridDetail_9ipdkx1DS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_9ipdkx1DS.UsrComment"
									}
								},
								"GridDetail_9ipdkx1DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_9ipdkx1DS.CreatedOn"
									}
								},
								"GridDetail_9ipdkx1DS_UsrParentRealty": {
									"modelConfig": {
										"path": "GridDetail_9ipdkx1DS.UsrParentRealty"
									}
								},
								"GridDetail_9ipdkx1DS_Id": {
									"modelConfig": {
										"path": "GridDetail_9ipdkx1DS.Id"
									}
								}
							}
						}
					},
					"UsrParentRealty": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_9ipdkx1DS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_9ipdkx1DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrOwner": {
									"path": "UsrOwner"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrParentRealty": {
									"path": "UsrParentRealty"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
          {
              request: "crt.HandleViewModelAttributeChangeRequest",
              /* The custom implementation of the system query handler. */
              handler: async (request, next) => {
                  if (request.attributeName === 'PDS_UsrPriceUSD_tlns3mn' || 				// if price changed
                    request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent' ) { 		// or percent changed
                      var price = await request.$context.PDS_UsrPriceUSD_tlns3mn;
                      var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent;
                      var commission = price * percent / 100;
                      request.$context.PDS_UsrCommission_e22zi1j = commission;
                  }
                  /* Call the next handler if it exists and return its result. */
                  return next?.handle(request);
              }
          },
          {
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
                    /* Check if price changes. */
                    if (request.attributeName === 'PDS_UsrPriceUSD_tlns3mn') {
                        const priceCurrent = await request.$context.PDS_UsrPriceUSD_tlns3mn;
                        const priceLimit = 5000;
                        const isHigh = priceCurrent > priceLimit;
                          if (isHigh === true) {
                              request.$context.enableAttributeValidator('PDS_UsrComment_a2tt7ux', 'required');
                          } 
                          else {
                              request.$context.disableAttributeValidator('PDS_UsrComment_a2tt7ux', 'required');
                          }
                    }
                    /* Call the next handler if it exists and return its result. */
                    return next?.handle(request);
              }
          }
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
          	/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value > minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
        }/**SCHEMA_VALIDATORS*/
	};
});