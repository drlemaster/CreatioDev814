﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyServiceSchema

	/// <exclude/>
	public class UsrRealtyServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyServiceSchema(UsrRealtyServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("1b7ad6a9-77e9-4d5c-87b0-dc322f41b32b");
			Name = "UsrRealtyService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("ae5070d5-47f6-437b-bd34-b1e5b2af2ce3");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,181,83,77,143,218,48,16,189,175,196,127,112,115,114,36,26,169,215,210,173,4,93,64,180,130,160,13,136,67,181,7,147,12,172,85,199,201,218,14,221,136,229,191,239,36,118,178,161,31,84,28,122,130,188,153,121,243,230,141,71,178,20,116,206,98,32,43,80,138,233,108,103,130,47,153,220,241,125,161,152,225,153,188,57,222,16,82,104,46,247,36,42,181,129,52,136,64,29,120,12,243,44,1,49,232,93,138,6,27,216,14,46,38,12,99,195,15,117,159,183,188,174,16,5,193,221,232,79,33,100,198,112,154,118,11,109,131,223,26,86,169,17,104,141,77,34,195,12,212,154,191,59,25,56,171,81,44,54,15,53,56,212,249,2,12,242,230,168,105,203,5,55,229,61,60,21,92,65,10,210,104,218,253,168,6,32,183,228,31,37,85,86,224,128,196,127,192,38,121,177,21,60,38,177,96,90,147,123,96,194,148,78,11,249,72,70,76,131,251,234,147,25,70,147,80,138,178,171,30,25,142,149,86,84,27,230,96,119,212,14,97,113,28,120,38,15,217,15,160,115,48,143,89,130,42,189,101,24,173,188,62,25,101,73,25,153,82,84,202,49,109,142,196,108,15,45,26,108,20,203,115,72,250,182,3,33,149,114,208,102,146,169,148,153,179,26,11,5,95,117,38,251,152,166,243,76,106,184,156,135,227,215,180,206,129,4,98,158,50,65,166,96,230,92,46,21,206,60,42,87,101,14,179,132,106,163,170,13,170,218,30,139,245,201,25,24,238,118,160,92,164,81,235,18,208,119,220,194,2,95,182,95,7,142,46,204,119,196,17,7,51,189,40,132,8,213,56,205,77,73,187,109,124,242,242,66,46,100,117,250,250,142,151,252,181,164,163,196,111,68,30,123,109,153,2,83,40,73,222,127,24,180,208,169,137,70,32,32,54,68,219,159,91,34,225,167,195,232,90,131,194,149,75,252,143,203,111,84,224,57,136,34,149,116,82,200,56,64,67,169,183,214,170,118,117,29,221,121,111,253,131,137,202,82,250,171,71,136,111,30,65,65,93,101,199,243,124,156,102,252,84,48,65,45,117,176,100,10,11,12,40,90,169,153,22,60,57,183,206,111,185,134,50,169,153,58,110,93,65,215,245,184,229,100,218,205,223,152,213,188,31,5,186,16,149,69,214,171,96,252,12,113,97,32,138,153,96,234,147,203,250,76,253,166,206,185,110,203,6,141,45,167,235,111,106,58,190,230,164,254,211,69,117,14,202,61,127,188,167,241,51,75,115,1,212,189,255,222,249,228,94,248,237,157,215,184,113,234,217,104,253,240,78,175,98,158,245,1,15,6,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("1b7ad6a9-77e9-4d5c-87b0-dc322f41b32b"));
		}

		#endregion

	}

	#endregion

}
