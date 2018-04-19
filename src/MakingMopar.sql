ALTER VIEW MakingMopar AS
-- Use this to create the data format to use on the website SORT IS IMPORTANT!
/* 
select * from MakingMopar
ORDER BY Class, PlanType, CAST(Ded AS INT),
CAST(dbo.NumericPart(LEFT(Term,CHARINDEX('/',Term))) AS INT),  --years
CAST(dbo.NumericPart(REPLACE(RIGHT(Term,LEN(Term)-CHARINDEX('/',Term)),'K','')) AS INT)
*/
SELECT top 100 percent Class, Term, PlanType, CAST(Ded AS INT) Ded, ProdID, WooID, ProdIDS, WooIDS, CAST(Amt AS INT) Amt, CAST(MSRP AS INT) MSRP FROM (
	SELECT 'a' AS Class, REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(mp.Term,',000 Miles','K'),' ',''),'Years',''),'LifetimeMaximumCare/Cost','LMCC'),'UnlimitedMiles/Cost','UMC') AS Term, 
	IIF(mp.PlanType='Powertrain Care Plus','PCP',
	IIF(mp.PlanType='Added Care Plus','ACP',
	IIF(mp.PlanType='Maximum Care','MC',
	IIF(mp.PlanType='Maximum Care Unlimited','MCU',
	IIF(mp.PlanType='Lifetime Plans','LP',
	''))))) AS PlanType,
	mp.Deductible Ded,
	A_ProdID AS ProdID,
	A_WooID AS WooID,
	A_ProdIDs AS ProdIDS,
	A_WooIDs AS WooIDS,
	A_Class AS Amt,
	A_MSRP AS MSRP
	FROM MoparPlans mp
	LEFT JOIN MoparWooIDs wid
	ON mp.[Option] = wid.[Option]
	LEFT JOIN MoparWooIDsSurcharge wis
	ON mp.[Option] = wis.[Option]
	UNION
	SELECT 'b' AS Class, REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(Term,',000 Miles','K'),' ',''),'Years',''),'LifetimeMaximumCare/Cost','LMCC'),'UnlimitedMiles/Cost','UMC') AS Term, 
	IIF(PlanType='Powertrain Care Plus','PCP',
	IIF(PlanType='Added Care Plus','ACP',
	IIF(PlanType='Maximum Care','MC',
	IIF(PlanType='Maximum Care Unlimited','MCU',
	IIF(PlanType='Lifetime Plans','LP',
	''))))) AS PlanType,
	mp.Deductible Ded,
	B_ProdID AS ProdID,
	B_WooID AS WooID,
	B_ProdIDs AS ProdIDS,
	B_WooIDs AS WooIDS,
	B_Class AS Amt,
	B_MSRP AS MSRP
	FROM MoparPlans mp
	LEFT JOIN MoparWooIDs wid
	ON mp.[Option] = wid.[Option]
	LEFT JOIN MoparWooIDsSurcharge wis
	ON mp.[Option] = wis.[Option]
	UNION
	SELECT 'c' AS Class, REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(Term,',000 Miles','K'),' ',''),'Years',''),'LifetimeMaximumCare/Cost','LMCC'),'UnlimitedMiles/Cost','UMC') AS Term, 
	IIF(PlanType='Powertrain Care Plus','PCP',
	IIF(PlanType='Added Care Plus','ACP',
	IIF(PlanType='Maximum Care','MC',
	IIF(PlanType='Maximum Care Unlimited','MCU',
	IIF(PlanType='Lifetime Plans','LP',
	''))))) AS PlanType,
	mp.Deductible Ded,
	C_ProdID AS ProdID,
	C_WooID AS WooID,
	C_ProdIDs AS ProdIDS,
	C_WooIDs AS WooIDS,
	C_Class AS Amt,
	C_MSRP AS MSRP
	FROM MoparPlans mp
	LEFT JOIN MoparWooIDs wid
	ON mp.[Option] = wid.[Option]
	LEFT JOIN MoparWooIDsSurcharge wis
	ON mp.[Option] = wis.[Option]
	UNION
	SELECT 'd' AS Class, REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(Term,',000 Miles','K'),' ',''),'Years',''),'LifetimeMaximumCare/Cost','LMCC'),'UnlimitedMiles/Cost','UMC') AS Term, 
	IIF(PlanType='Powertrain Care Plus','PCP',
	IIF(PlanType='Added Care Plus','ACP',
	IIF(PlanType='Maximum Care','MC',
	IIF(PlanType='Maximum Care Unlimited','MCU',
	IIF(PlanType='Lifetime Plans','LP',
	''))))) AS PlanType,
	mp.Deductible Ded,
	D_ProdID AS ProdID,
	D_WooID AS WooID,
	D_ProdIDs AS ProdIDS,
	D_WooIDs AS WooIDS,
	D_Class AS Amt,
	D_MSRP AS MSRP
	FROM MoparPlans mp
	LEFT JOIN MoparWooIDs wid
	ON mp.[Option] = wid.[Option]
	LEFT JOIN MoparWooIDsSurcharge wis
	ON mp.[Option] = wis.[Option]
	UNION
	SELECT 'e' AS Class, REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(Term,',000 Miles','K'),' ',''),'Years',''),'LifetimeMaximumCare/Cost','LMCC'),'UnlimitedMiles/Cost','UMC') AS Term, 
	IIF(PlanType='Powertrain Care Plus','PCP',
	IIF(PlanType='Added Care Plus','ACP',
	IIF(PlanType='Maximum Care','MC',
	IIF(PlanType='Maximum Care Unlimited','MCU',
	IIF(PlanType='Lifetime Plans','LP',
	''))))) AS PlanType,
	mp.Deductible Ded,
	E_ProdID AS ProdID,
	E_WooID AS WooID,
	E_ProdIDs AS ProdIDS,
	E_WooIDs AS WooIDS,
	E_Class AS Amt,
	E_MSRP AS MSRP
	FROM MoparPlans mp
	LEFT JOIN MoparWooIDs wid
	ON mp.[Option] = wid.[Option]
	LEFT JOIN MoparWooIDsSurcharge wis
	ON mp.[Option] = wis.[Option]
	UNION
	SELECT 'f' AS Class, REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(Term,',000 Miles','K'),' ',''),'Years',''),'LifetimeMaximumCare/Cost','LMCC'),'UnlimitedMiles/Cost','UMC') AS Term, 
	IIF(PlanType='Powertrain Care Plus','PCP',
	IIF(PlanType='Added Care Plus','ACP',
	IIF(PlanType='Maximum Care','MC',
	IIF(PlanType='Maximum Care Unlimited','MCU',
	IIF(PlanType='Lifetime Plans','LP',
	''))))) AS PlanType,
	mp.Deductible Ded,
	F_ProdID AS ProdID,
	F_WooID AS WooID,
	F_ProdIDs AS ProdIDS,
	F_WooIDs AS WooIDS,
	F_Class AS Amt,
	F_MSRP AS MSRP
	FROM MoparPlans mp
	LEFT JOIN MoparWooIDs wid
	ON mp.[Option] = wid.[Option]
	LEFT JOIN MoparWooIDsSurcharge wis
	ON mp.[Option] = wis.[Option]
	UNION
	SELECT 'g' AS Class, REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(Term,',000 Miles','K'),' ',''),'Years',''),'LifetimeMaximumCare/Cost','LMCC'),'UnlimitedMiles/Cost','UMC') AS Term, 
	IIF(PlanType='Powertrain Care Plus','PCP',
	IIF(PlanType='Added Care Plus','ACP',
	IIF(PlanType='Maximum Care','MC',
	IIF(PlanType='Maximum Care Unlimited','MCU',
	IIF(PlanType='Lifetime Plans','LP',
	''))))) AS PlanType,
	mp.Deductible Ded,
	G_ProdID AS ProdID,
	G_WooID AS WooID,
	G_ProdIDs AS ProdIDS,
	G_WooIDs AS WooIDS,
	G_Class AS Amt,
	G_MSRP AS MSRP
	FROM MoparPlans mp
	LEFT JOIN MoparWooIDs wid
	ON mp.[Option] = wid.[Option]
	LEFT JOIN MoparWooIDsSurcharge wis
	ON mp.[Option] = wis.[Option]
	UNION
	SELECT 'h' AS Class, REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(Term,',000 Miles','K'),' ',''),'Years',''),'LifetimeMaximumCare/Cost','LMCC'),'UnlimitedMiles/Cost','UMC') AS Term, 
	IIF(PlanType='Powertrain Care Plus','PCP',
	IIF(PlanType='Added Care Plus','ACP',
	IIF(PlanType='Maximum Care','MC',
	IIF(PlanType='Maximum Care Unlimited','MCU',
	IIF(PlanType='Lifetime Plans','LP',
	''))))) AS PlanType,
	mp.Deductible Ded,
	H_ProdID AS ProdID,
	H_WooID AS WooID,
	H_ProdIDs AS ProdIDS,
	H_WooIDs AS WooIDS,
	H_Class AS Amt,
	H_MSRP AS MSRP
	FROM MoparPlans mp
	LEFT JOIN MoparWooIDs wid
	ON mp.[Option] = wid.[Option]
	LEFT JOIN MoparWooIDsSurcharge wis
	ON mp.[Option] = wis.[Option]
	UNION --special class I is E + 550
	SELECT 'i' AS Class, REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(Term,',000 Miles','K'),' ',''),'Years',''),'LifetimeMaximumCare/Cost','LMCC'),'UnlimitedMiles/Cost','UMC') AS Term, 
	IIF(PlanType='Powertrain Care Plus','PCP',
	IIF(PlanType='Added Care Plus','ACP',
	IIF(PlanType='Maximum Care','MC',
	IIF(PlanType='Maximum Care Unlimited','MCU',
	IIF(PlanType='Lifetime Plans','LP',
	''))))) AS PlanType,
	mp.Deductible Ded,
	I_ProdID AS ProdID,
	I_WooID AS WooID,
	I_ProdIDs AS ProdIDS,
	I_WooIDs AS WooIDS,
	I_Class AS Amt,
	I_MSRP AS MSRP
	FROM MoparPlans mp
	LEFT JOIN MoparWooIDs wid
	ON mp.[Option] = wid.[Option]
	LEFT JOIN MoparWooIDsSurcharge wis
	ON mp.[Option] = wis.[Option]
	UNION ALL --Blanks to line up rows
		select Class, yr + '/' + ml + 'K' AS Term, 'PCP' AS [PlanType], Ded,'','','','','','' FROM (
			SELECT 'a' AS Class
			UNION SELECT 'b'
			UNION SELECT 'c'
			UNION SELECT 'd'
			UNION SELECT 'e'
			UNION SELECT 'f'
			UNION SELECT 'g'
			UNION SELECT 'h'
			UNION SELECT 'i'
		) AS one
		CROSS JOIN (
			select '5' yr union select '6' union select '7' union select '8'
		) as two
		cross join (
			select '60' ml union select '70'
		) as three
		cross join (
			select '0' Ded union select '100' union select '200'
		) as four
) AS inr
WHERE WooID IS NOT NULL
ORDER BY Class, PlanType, CAST(Ded AS INT),
CAST(dbo.NumericPart(LEFT(Term,CHARINDEX('/',Term))) AS INT),  --years
CAST(dbo.NumericPart(REPLACE(RIGHT(Term,LEN(Term)-CHARINDEX('/',Term)),'K','')) AS INT) --miles

