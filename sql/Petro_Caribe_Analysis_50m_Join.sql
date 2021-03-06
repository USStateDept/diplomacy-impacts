DROP TABLE IF EXISTS public."Petro_Caribe_Analysis_50m";
CREATE TABLE public."Petro_Caribe_Analysis_50m" AS
SELECT 
	sovereignt,
	"Petro_Caribe_Analysis"."Country",
	"Petro_Caribe_Analysis"."Analysis",
	"Petro_Caribe_Analysis"."Extended Credit Facility",
	"Petro_Caribe_Analysis"."Agreement",
	"Petro_Caribe_Analysis"."CAB 2005 (%GSP)",
	"Petro_Caribe_Analysis"."Debt to GDP Ratio 2005",
	"Petro_Caribe_Analysis"."Nominal GDP 2005 (USD bil)",
	"Petro_Caribe_Analysis"."Total Public Debt 2005 (USD bil)",
	"Petro_Caribe_Analysis"."GDP Growth 2013",
	"Petro_Caribe_Analysis"."CAB 2013 (%GDP)",
	"Petro_Caribe_Analysis"."Debt to GDP Ratio 2013",
	"Petro_Caribe_Analysis"."IMF Program 2013",
	"Petro_Caribe_Analysis"."Inflation 2013 (avg)",
	"Petro_Caribe_Analysis"."Nominal GDP 2013 (USD bil)",
	"Petro_Caribe_Analysis"."Total Public Debt 2013 (USD bil)",
	"Petro_Caribe_Analysis"."Share PetroCaribe DSP",
	"Petro_Caribe_Analysis"."Annual Financing weighted (%GDP)",
	"Petro_Caribe_Analysis"."Stock of Debt weighted (%GDP)",
	"Petro_Caribe_Analysis"."Annual Financing 2012 (%GDP)",
	"Petro_Caribe_Analysis"."Stock of Debt 2012 (%GDP)",
	"Petro_Caribe_Analysis"."PC Debt to GDP weighted",
	"Petro_Caribe_Analysis"."Share of Total Debt weighted",
	"Petro_Caribe_Analysis"."Debt to Paris Club (USD mil)",
	"Petro_Caribe_Analysis"."Debt to Paris Club (% Total Debt)",
	"Petro_Caribe_Analysis"."Debt to US (USD mil)",
	"Petro_Caribe_Analysis"."Debt to US (% Total Debt)",
	"Petro_Caribe_Analysis"."Debt to AUS (USD mil)",
	"Petro_Caribe_Analysis"."Debt to AUT (USD mil)",
	"Petro_Caribe_Analysis"."Debt to BEL (USD mil)",
	"Petro_Caribe_Analysis"."Debt to CAN (USD mil)",
	"Petro_Caribe_Analysis"."Debt to DNK (USD mil)",
	"Petro_Caribe_Analysis"."Debt to FIN (USD mil)",
	"Petro_Caribe_Analysis"."Debt to FRA (USD mil)",
	"Petro_Caribe_Analysis"."Debt to GER (USD mil)",
	"Petro_Caribe_Analysis"."Debt to ITA (USD mil)",
	"Petro_Caribe_Analysis"."Debt to JPN (USD mil)",
	"Petro_Caribe_Analysis"."Debt to NLD (USD mil)",
	"Petro_Caribe_Analysis"."Debt to NOR (USD mil)",
	"Petro_Caribe_Analysis"."Debt to RUS (USD mil)",
	"Petro_Caribe_Analysis"."Debt to SPA (USD mil)",
	"Petro_Caribe_Analysis"."Debt to SWE (USD mil)",
	"Petro_Caribe_Analysis"."Debt to SWI (USD mil)",
	"Petro_Caribe_Analysis"."Debt to UK (USD mil)",
	"Petro_Caribe_Analysis"."Debt-to-GDP Index",
	"Petro_Caribe_Analysis"."AF Index",
	"Petro_Caribe_Analysis"."Main Index",
	"Petro_Caribe_Analysis"."Cell",
	the_geom
FROM opengeo."ne_50m_admin_0_countries_lakes" LEFT OUTER JOIN public."Petro_Caribe_Analysis" ON (ne_50m_admin_0_countries_lakes.sovereignt = "Petro_Caribe_Analysis"."Country");
