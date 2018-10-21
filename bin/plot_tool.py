import pandas as pd
import numpy as np

# Antarctic height
file_path = '/home/andrea/PycharmProjects/NasaSpaceApp-analICE/Data/dh_antarctic.csv'

dh = pd.read_csv(file_path)

time = dh['Year']
dh_m = dh['All Antarctica']
time_clean = []
for item in time:
    time_clean.append(int(np.floor(item)))

start=1994
dict_dh = {}
for ix, dhh in enumerate(dh_m):
    dict_dh[str(start)] = {}
    dict_dh[str(start)]['thick_m'] = []
    if time_clean[ix]==start:
       dict_dh[str(start)]['thick_m'] = str(dhh)
       start = start +1
    else:
        continue

# Global temp variation

temp_path = 'https://pkgstore.datahub.io/core/global-temp/annual_csv/data/a26b154688b061cdd04f1df36e4408be/annual_csv.csv'

dt = pd.read_csv(temp_path)

time = dt['Year']
dt_m = dt['Mean']
time_clean = []
for item in time:
    time_clean.append(int(np.floor(item)))

start=time_clean[0]

for ix, dtt in enumerate(dt_m):
    try:
        dict_dh[str(start)]['temp'] = []
    except KeyError:
        dict_dh[str(start)] = {}
        dict_dh[str(start)]['temp'] = []

    if time_clean[ix]==start:
       dict_dh[str(start)]['temp'] = str(dtt)
       start = start - 1
    else:
        continue

# World pop

time = [1960, 1961,	1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971,
        1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983,
        1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995,
        1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
        2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017]
world_pop = [3032160395, 3073368589, 3126509809, 3191786428, 3257459749,
             3324545319, 3394783653, 3464689185, 3535355316, 3610178793,
             3685753341, 3763393039, 3840269676, 3916243701, 3992871281, 4067740568,
             4140647339, 4213305195, 4287155675, 4362863944, 4439337768, 4517802648,
             4599181616, 4681262096, 4763043102, 4846338372, 4932113625, 5020001104,
             5108813278, 5197758286, 5288103214, 5375488619, 5459753865, 5544873088,
             5628791176, 5713794372, 5796632117, 5879433900, 5961166037, 6041818586,
             6121682736, 6201340258, 6280530065, 6359899296, 6439825381, 6520298763, 6601476541,
             6683223772, 6766296679, 6849569339, 6932869743, 7014983968, 7099557649, 7185137526,
             7271322821, 7357559450, 7444157356, 7530360149]

start=time_clean[0]

for ix, wpp in enumerate(world_pop):
    try:
        dict_dh[str(start)]['temp'] = []
    except KeyError:
        dict_dh[str(start)] = {}
        dict_dh[str(start)]['world_pop'] = []

    if time_clean[ix]==start:
       dict_dh[str(start)]['world_pop'] = str(wpp)
       start = start + 1
    else:
        continue

# Global sea level variation

sea_lvl = '/home/andrea/PycharmProjects/NasaSpaceApp-analICE/Data/sea_lvl.txt'

sl = np.loadtxt(sea_lvl)
sea_list = []
year_sl = []

for array in sl:
    sea_list.append(array[5])
    year_sl.append(array[2])

x_t = np.arange(1993, 2019, 1)

y_int = np.interp(x_t, year_sl, sea_list)

for ix, sl_year in enumerate(x_t):
    try:
        dict_dh[str(sl_year)]['sea_lvl_mm'] = y_int[ix]
    except KeyError:
        dict_dh[str(sl_year)] = {}
        dict_dh[str(sl_year)]['sea_lvl_mm'] = y_int[ix]

# Extent data

ext_dt = '/home/andrea/PycharmProjects/NasaSpaceApp-analICE/Data/ext.xlsx'

sheets_to_read = ['NH-Extent', 'SH-Extent', 'NH-Area', 'SH-Area']
for sheet in sheets_to_read:
    ext_dt_rd = pd.read_excel(ext_dt, sheet_name=sheet)
    for key, value in ext_dt_rd['Annual'].items():
        try:
            dict_dh[str(key)][sheet] = value
        except KeyError:
            dict_dh[str(key)] = {}
            dict_dh[str(key)][sheet] = value



