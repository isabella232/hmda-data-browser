const jsonData = '{"AK":[11260,21820],"AL":[11500,12220,13820,17980,19300,19460,20020,22520,23460,26620,33660,33860,46220],"AR":[22220,22900,26300,27860,30780,32820,38220,45500],"AZ":[22380,29420,38060,39140,43420,46060,49740],"CA":[11244,12540,17020,20940,23420,25260,31084,31460,32900,33700,34900,36084,37100,39820,40140,40900,41500,41740,41884,41940,42020,42034,42100,42200,42220,44700,46700,47300,49700],"CO":[14500,17820,19740,22660,24300,24540,39380],"CT":[14860,25540,35300,35980,49340],"DC":[47894],"DE":[20100,41540,48864],"FL":[15980,18880,19660,22744,23540,26140,27260,29460,33124,34940,35840,36100,36740,37340,37460,37860,38940,39460,42680,42700,45220,45300,45540,48424],"GA":[10500,12020,12060,12260,15260,16860,17980,19140,23580,25980,31420,40660,42340,46660,47580],"HI":[27980,46520],"IA":[11180,16300,19340,19780,20220,26980,36540,43580,47940],"ID":[14260,17660,26820,30300,30860,38540],"IL":[14010,16020,16060,16580,16974,19180,19340,19500,20994,28100,29404,37900,40420,41180,44100],"IN":[14020,17140,18020,21140,21780,23060,23844,26900,29020,29200,31140,33140,34620,43780,45460],"KS":[28140,29940,31740,41140,45820,48620],"KY":[14540,17140,17300,21060,21780,26580,30460,31140,36980],"LA":[10780,12940,25220,26380,29180,29340,33740,35380,43340],"MA":[12700,14454,15764,38340,39300,44140,49340],"MD":[12580,15680,19060,25180,41540,43524,47894,48864],"ME":[12620,30340,38860],"MI":[11460,12980,13020,19804,22420,24340,27100,28020,29620,33220,33780,34740,35660,40980,43780,47664],"MN":[20260,22020,24220,29100,31860,33460,40340,41060],"MO":[16020,17860,22220,27620,27900,28140,41140,41180,44180],"MS":[25060,25620,27140,32820],"MT":[13740,24500,33540],"NC":[11700,15500,16740,20500,22180,24140,24660,24780,25860,27340,34820,35100,39580,40580,47260,48900,49180],"ND":[13900,22020,24220],"NE":[24260,30700,36540,43580],"NH":[31700,40484],"NJ":[10900,12100,15804,35084,35614,36140,45940,47220,48864],"NM":[10740,22140,29740,42140],"NV":[16180,29820,39900],"NY":[10580,13780,15380,20524,21300,24020,27060,28740,35004,35614,40380,45060,46540,48060],"OH":[10420,15940,17140,17460,18140,19380,26580,30620,31900,44220,45780,48260,48540,49660],"OK":[21420,22900,30020,36420,46140],"OR":[10540,13460,18700,21660,24420,32780,38900,41420],"PA":[10900,11020,14100,16540,20700,21500,23900,25420,27780,29540,30140,33874,35084,37964,38300,39740,42540,44300,48700,49620,49660],"PR":[10380,11640,25020,32420,38660,41900,41980],"RI":[39300],"SC":[12260,16700,16740,17900,22500,24860,25940,34820,43900,44940],"SD":[39660,43580,43620],"TN":[16860,17300,17420,27180,27740,28700,28940,32820,34100,34980],"TX":[10180,11100,12420,13140,15180,17780,18580,19124,21340,23104,26420,28660,29700,30980,31180,32580,33260,36220,41660,41700,43300,45500,46340,47020,47380,48660],"UT":[30860,36260,39340,41100,41620],"VA":[13980,16820,25500,28700,31340,40060,40220,44420,47260,47894,49020],"VT":[15540],"WA":[13380,14740,28420,30300,31020,34580,36500,38900,42644,44060,45104,47460,48300,49420],"WI":[11540,20260,20740,22540,24580,27500,29100,29404,31540,33340,33460,36780,39540,43100,48140],"WV":[13220,16620,19060,25180,26580,34060,37620,47894,48260,48540,49020],"WY":[16220,16940],"NA":[99999]}'

const data2017 = JSON.parse(jsonData)

const data2018 = {
  ...data2017
}

data2018.ID.push(46300)

export default {
  2017: data2017,
  2018: data2018
}
