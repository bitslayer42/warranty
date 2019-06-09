select * 
-- update pl set a = te.a,b = te.b,c = te.c,d = te.d,e = te.e,f = te.f,g = te.g,h = te.h,i = te.i,j = te.j,z = te.z
from mopartemp te
inner join moparplans pl
on te.[option] = pl.[option]