/* June-2018
 * Tommy Dang (on the HPCC project, as Assistant professor, iDVL@TTU)
 *
 * THIS SOFTWARE IS BEING PROVIDED "AS IS", WITHOUT ANY EXPRESS OR IMPLIED
 * WARRANTY.  IN PARTICULAR, THE AUTHORS MAKE NO REPRESENTATION OR WARRANTY OF ANY KIND CONCERNING THE MERCHANTABILITY
 * OF THIS SOFTWARE OR ITS FITNESS FOR ANY PARTICULAR PURPOSE.
 */


// Set the dimensions of the canvas / graph
var margin = {top: 5, right: 0, bottom: 50, left: 0};

var svg = d3.select("svg"),
    width = +document.getElementById("mainBody").offsetWidth,
    height = +svg.attr("height")-margin.top-margin.bottom;

svg = svg.append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");
    //.call(d3.zoom()
    //    .scaleExtent([1, 8])
    //    .on("zoom", zoom));
//function zoom() {
//   svg.attr("transform", d3.event.transform);
//}

// START: loader spinner settings ****************************
var opts = {
    lines: 25, // The number of lines to draw
    length: 15, // The length of each line
    width: 5, // The line thickness
    radius: 25, // The radius of the inner circle
    color: '#f00', // #rgb or #rrggbb or array of colors
    speed: 2, // Rounds per second
    trail: 50, // Afterglow percentage
    className: 'spinner', // The CSS class to assign to the spinner
};
var target = document.getElementById('loadingSpinner');
var spinner = new Spinner(opts).spin(target);
// END: loader spinner settings ****************************


main();
//drawLegend(arrTemp, arrColor);
//addDatasetsOptions(); // Add these dataset to the select dropdown, at the end of this files


function main() {
    // Summary Panel ********************************************************************
    svg.append("rect")
        .attr("class", "summaryRect")
        .attr("x", 1)
        .attr("y", 10)
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("width", width-2)
        .attr("height", 500)
        .attr("fill", "#fff")
        .attr("stroke", "#000")
        .attr("stroke-width", 1)
        .style("box-shadow", "10px 10px 10px #666");
    svg.append("text")
        .attr("class", "summaryText1")
        .attr("x", 20)
        .attr("y", 30)
        .attr("fill", "#000")
        .style("text-anchor", "start")
        .style("font-size", "16px")
        .style("text-shadow", "1px 1px 0 rgba(255, 255, 255")
        .attr("font-family", "sans-serif")
        .text("Quanah HPC system: ");

    svg.append("line")
        .attr("class", "currentTimeline")
        .attr("x1", 10)
        .attr("y1", 40)
        .attr("x2", 10)
        .attr("y2", 210)
        .attr("stroke", "#000")
        .attr("stroke-width", 1)
        .style("stroke-dasharray", ("2, 2"));;

    svg.append("text")
        .attr("class", "currentText")
        .attr("x", 10)
        .attr("y", 164)
        .attr("fill", "#000")
        .style("text-anchor", "start")
        .style("font-size", "12px")
        .style("text-shadow", "1px 1px 0 rgba(255, 255, 255")
        .attr("font-family", "sans-serif")
        .text("Latest REQUEST");    
    svg.append("text")
        .attr("class", "currentHostText")
        .attr("x", 10)
        .attr("y", 182)
        .attr("fill", "#000")
        .style("text-anchor", "start")
        .style("font-weight","bold")
        .style("font-size", "12px")
        .style("text-shadow", "1px 1px 0 rgba(255, 255, 255")
        .attr("font-family", "sans-serif")
        .text("Host");
    svg.append("text")
        .attr("class", "currentTimeText")
        .attr("x", 10)
        .attr("y", 200)
        .attr("fill", "#000")
        .style("text-anchor", "start")
        .style("font-style","italic")
        .style("font-size", "12px")
        .style("text-shadow", "1px 1px 0 rgba(255, 255, 255")
        .attr("font-family", "sans-serif")
        .text("Time");
    
    d3.json("data/news.json", function(data) {
        console.log(data);
    });
            

{"status":"ok","totalResults":3718,"articles":[{"source":{"id":"cnbc","name":"CNBC"},"author":"Dr. Michael Ivanovitch","title":"US inflation is the world's most important economic variable","description":"The U.S. Federal Reserve is now well beyond the stage where it could think of fine tuning the economic activity in an environment of stable costs and prices, Michael Ivanovitch writes.","url":"https://www.cnbc.com/2018/10/08/-us-inflation-is-the-worlds-most-important-economic-variable.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/02/06/104992127-RTX4QJDO.1910x1000.jpg","publishedAt":"2018-10-08T04:00:00Z","content":"On top of that, we now have a trade policy that has set in motion an import substitution process. Pervasive import tariffs will continue to push up prices of imported goods and services, and they will also stimulate local production in the U.S. at a time of v… [+2183 chars]"},{"source":{"id":"cnbc","name":"CNBC"},"author":"Reuters","title":"North Korea leader Kim Jong Un expected to visit Russia, says South Korea's president","description":"Other than the North Korean leader's planned visit to Russia, Chinese leader Xi Jinping is also expected to travel to Pyongyang, said South Korea's president during a Cabinet meeting on Monday.","url":"https://www.cnbc.com/2018/10/08/north-korea-leader-kim-jong-un-expected-to-visit-russia-moon-jae-in.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/10/08/105492549-1538968782748gettyimages-1036438408.1910x1000.jpeg","publishedAt":"2018-10-08T03:54:00Z","content":"North Korean leader Kim Jong Un is expected to visit Russia soon, South Korean President Moon Jae-in said on Monday, and Chinese leader Xi Jinping is also expected to travel to North Korea. Moon spoke of the imminent travel plans of the North Korean and Chine… [+596 chars]"},{"source":{"id":"cnbc","name":"CNBC"},"author":"Eustance Huang","title":"Tell us what you think: Are we entering the beginning of a bear market for bonds?","description":"The yield on the benchmark U.S. 10-year Treasury note jumped to a 7-year high on Friday after jobs data showed unemployment stateside was at its lowest levels since 1969.","url":"https://www.cnbc.com/2018/10/08/trader-poll-are-we-entering-the-beginning-of-a-bear-market-for-bonds.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/10/08/105492448-1538957191450gettyimages-1045675058.1910x1000.jpeg","publishedAt":"2018-10-08T03:32:00Z","content":"The yield on the benchmark U.S. 10-year Treasury note jumped to a 7-year high on Friday following the release of jobs data which showed unemployment stateside falling to its lowest levels in 49 years. div &gt; div.group &gt; p:first-child\"&gt; The move came a… [+654 chars]"},{"source":{"id":"cnbc","name":"CNBC"},"author":"The Associated Press","title":"Brazil's far-right candidate falls short of election stunner, faces runoff against leftist rival","description":"Brazil's presidential election will be decided in a runoff between right-winger Jair Bolsonaro and leftist Fernando Haddad, the country's top electoral tribunal said after all the votes were counted on Sunday.","url":"https://www.cnbc.com/2018/10/08/brazil-presidential-election-bolsonaro-to-face-haddad-in-runoff.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/10/08/105492493-1538962207746gettyimages-1047287124.1910x1000.jpeg","publishedAt":"2018-10-08T03:03:00Z","content":"A far-right former army captain who expresses nostalgia for Brazil's military dictatorship won its presidential election by a surprisingly large margin Sunday but fell just short of getting enough votes to avoid a second-round runoff against a leftist rival. … [+5718 chars]"},{"source":{"id":"cnbc","name":"CNBC"},"author":"Kelly Olsen","title":"The yuan may be weak, but mainland Chinese are still flowing into Hong Kong and Macau","description":"Mainland Chinese consumers are ignoring the weak Chinese yuan and heading to Hong Kong and Macau in increasing numbers. Analysts say the trend is likely to continue as a major infrastructure project integrates the two former European colonies with southern Ch…","url":"https://www.cnbc.com/2018/10/08/weak-yuan-but-mainland-chinese-still-flow-into-hong-kong-and-macau.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/09/21/105463482-1537507642804gettyimages-1017638300.1910x1000.jpeg","publishedAt":"2018-10-08T01:42:00Z","content":"Hong Kong, a former British colony, and Macau, once ruled by Portugal, maintained their own currencies after China regained control in 1997 and 1999, respectively. Gambling enclave Macau also appears to be outperforming in drawing Chinese visitors. A separate… [+1300 chars]"},{"source":{"id":"cnbc","name":"CNBC"},"author":"Mike Calia","title":"Taylor Swift jumps into politics, endorsing Democrats in key Senate, House races in Tennessee","description":"Swift stunned the pop culture and political worlds Sunday night with a lengthy, impassioned Instagram post in which she endorsed Democrats Phil Bredesen and Rep. Jim Cooper in their Tennessee U.S. Senate and House races, respectively.","url":"https://www.cnbc.com/2018/10/07/taylor-swift-endorses-democrats-bredesen-cooper-in-instagram-post.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/07/12/103781499-GettyImages-488352277.1910x1000.jpg","publishedAt":"2018-10-08T01:27:00Z","content":"Taylor Swift usually stays out of the political fray, but this year, with just a month to go until midterm elections, the pop superstar is getting involved in a big way. div &gt; div.group &gt; p:first-child\"&gt; Swift stunned the pop culture and political wo… [+3558 chars]"},{"source":{"id":"cnbc","name":"CNBC"},"author":"Reuters","title":"Oil prices fall as US may grant some waivers on Iran crude sanctions","description":"Last Friday, a U.S. government official said it would consider exemptions to its impending sanctions next month against Iran's crude oil exports.","url":"https://www.cnbc.com/2018/10/08/oil-prices-potential-waivers-to-looming-us-sanctions-on-iran-in-focus.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2015/12/08/103226538-GettyImages-174775753.1910x1000.jpg","publishedAt":"2018-10-08T01:14:00Z","content":"Oil prices fell on Monday after a U.S. government official said Washington was considering granting waivers to its sanctions against Iran's crude exports next month, and as Saudi Arabia was said to be replacing any potential shortfall from Iran. International… [+1581 chars]"},{"source":{"id":"cnbc","name":"CNBC"},"author":"Tom DiChristopher","title":"UN climate change panel says 'unprecedented' action needed to prevent temperature rise","description":"The UN Intergovernmental Panel on Climate Change says preventing global temperatures from rising by 1.5 degrees Celsius will require a \"rapid and far-reaching\" energy, transportation and industry transition.","url":"https://www.cnbc.com/2018/10/08/un-climate-change-panel-says-unprecedented-action-needed-to-prevent-temperature-rise.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/10/104645838-_sites-default-files-images-104645838-GettyImages-631092022.1910x1000.jpg","publishedAt":"2018-10-08T01:01:00Z","content":"Climate scientists gathered in Incheon, South Korea this month to assess the world's odds of achieving the tougher of two temperature targets in the Paris Agreement. The agreement aims to mobilize nations to take action to prevent global temperatures from ris… [+1422 chars]"},{"source":{"id":"cnbc","name":"CNBC"},"author":"Harini V","title":"The US can hurt Iran, but change might not come as easily, says expert on sanctions","description":"The sanctions on Iranian crude exports will likely succeed in hurting the country's economy, but it's less clear that the U.S. will achieve its goal of forcing changes  to the current regime in Tehran.","url":"https://www.cnbc.com/2018/10/08/us-sanctions-can-hurt-iran-but-change-may-not-come-as-easily-expert.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/05/08/105193433-RTS1QGGZ.1910x1000.jpg","publishedAt":"2018-10-08T00:53:00Z","content":"Sanctions on Iranian crude exports will likely succeed in hurting the country's economy, but whether the U.S. will achieve its goal in pushing for changes from the current regime in Tehran remains questionable, an expert told CNBC last week. div &gt; div.grou… [+2224 chars]"},{"source":{"id":"cnbc","name":"CNBC"},"author":"Eustance Huang","title":"Australia's ASX 200 sees decline in morning trade","description":"The benchmark 10-year Treasury note yield rose 3.24 percent to touch its highest since 2011 on Wall Street last Friday.","url":"https://www.cnbc.com/2018/10/08/asia-markets-us-treasuries-currencies-in-focus.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/08/03/105373617-1533274124819gettyimages-991118754.1910x1000.jpeg","publishedAt":"2018-10-07T23:49:00Z","content":"In the U.S. on Friday, the S&amp;P 500 fell by 0.6 percent to close at 2,885.57 while the Dow Jones Industrial Average lost 180.43 points to end the trading week at 26,447.05. The Nasdaq Composite also fell 1.2 percent to close at 7,788.45. Meanwhile, the ben… [+569 chars]"},{"source":{"id":"cnbc","name":"CNBC"},"author":"Ryan Browne","title":"Global dealmaking appetite falls to a four-year low amid Brexit, US-China trade fears, study says","description":"According to an EY report, 46 percent of global executives plan to buy other firms in the next 12 months, a 10 percent decline from the previous year.","url":"https://www.cnbc.com/2018/10/08/ma-appetite-falls-amid-brexit-us-china-trade-fears-ey-says.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/09/11/105444539-1536687927488gettyimages-871894534.1910x1000.jpeg","publishedAt":"2018-10-07T23:04:00Z","content":"Companies' appetite for mergers and acquisitions has fallen to a four-year low, with investment pressured by worries over Brexit and the U.S.-China trade battle, according to a study released on Monday. div &gt; div.group &gt; p:first-child\"&gt; Less than hal… [+1998 chars]"},{"source":{"id":"cnbc","name":"CNBC"},"author":"Tom DiChristopher","title":"Renewable energy is growing too slowly to meet climate goals, International Energy Agency warns","description":"Renewable energy will continue to grow rapidly over the next five years, but clean power adoption needs to speed up to meet climate and sustainability goals, the International Energy Agency says.","url":"https://www.cnbc.com/2018/10/07/renewable-energy-needs-to-speed-up-to-meet-climate-goals-iea-warns.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/11/22/104123790-GettyImages-546340055.1910x1000.jpg","publishedAt":"2018-10-07T23:00:00Z","content":"At the current pace of development, renewables will only account for 18 percent of the energy the world uses by 2040. That is far short of the 28 percent threshold the IEA believes is necessary to mitigate the impacts of climate change, produce cleaner air an… [+1100 chars]"},{"source":{"id":"cnbc","name":"CNBC"},"author":"Reuters","title":"Brazil exit polls point to wave of support for right-wing candidate billed as 'Tropical Trump'","description":"Early exit polls in Brazil on Sunday boosted hopes among supporters of right-wing presidential candidate Jair Bolsonaro that he could defy projections and win a first-round victory. An Ibope exit poll for the Rio de Janeiro governor race showed former judge W…","url":"https://www.cnbc.com/2018/10/07/reuters-america-update-5-brazil-exit-polls-point-to-wave-of-support-for-right-winger.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/10/02/105483791-1538504090621gettyimages-1027170732.1910x1000.jpeg","publishedAt":"2018-10-07T21:37:00Z","content":"Early exit polls in Brazil on Sunday boosted hopes among supporters of right-wing presidential candidate Jair Bolsonaro that he could defy projections and win a first-round victory. The fiery lawmaker has surged in opinion polls in the past week, and all majo… [+2741 chars]"},{"source":{"id":"cnbc","name":"CNBC"},"author":"Stephanie Landsman","title":"Ron Paul: US is barreling towards a 50% or more stock market drop","description":"Former presidential Candidate Ron Paul believes the bond pits are giving investors a dire message about the state of the nation.","url":"https://www.cnbc.com/2018/10/05/ron-paul-us-barreling-towards-a-recession-and-theres-no-escape.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/02/29/103428600-GettyImages-116771171r.1910x1000.jpg","publishedAt":"2018-10-07T21:02:05Z","content":"Ron Paul believes the bond trading pits are giving investors a dire message about the state of the nation's economy. div &gt; div.group &gt; p:first-child\"&gt; According to the former Republican Congressman from Texas, the recent jump in Treasury bond yields … [+1793 chars]"},{"source":{"id":"cnbc","name":"CNBC"},"author":"The Associated Press","title":"Limo crash in NY town leaves 20 dead in deadliest US transportation accident in nearly 10 years","description":"Twenty people were killed after a limo crash in update New York on Saturday afternoon, including 18 people inside the vehicle and two pedestrians.","url":"https://www.cnbc.com/2018/10/07/limo-crash-in-upstate-ny-town-of-schoharie-leaves-20-dead.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/10/07/105490901-1538943890917ap18280630608611.1910x1000.jpg","publishedAt":"2018-10-07T20:46:00Z","content":"A limousine blew a stop sign at the end of a highway and plowed into a parked and unoccupied SUV, killing all 18 people in the limo and two pedestrians in the deadliest transportation accident in the United States in almost a decade, officials said Sunday. Th… [+3253 chars]"},{"source":{"id":"cnbc","name":"CNBC"},"author":"Jill Cornfield","title":"Short-term health plans could be a buyer beware form of health insurance","description":"President Trump wants to extend the time you can use short-term health insurance but some states prohibit the plans altogether.","url":"https://www.cnbc.com/2018/10/05/you-can-save-a-lot-of-money-on-health-insurance-premiums-but-should-you.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/09/26/104733094-rsz_boomer.1910x1000.jpg","publishedAt":"2018-10-07T18:00:00Z","content":"Heather Kofke-Egger knows first-hand the risks of depending on a plan with skimpy benefits. Just out of college in 2002, she could pay $450 a month for a health plan offered to new graduates, or $85 a month for a short-term plan. \"I knew I was taking a risk,\"… [+1874 chars]"},{"source":{"id":"cnbc","name":"CNBC"},"author":"The Associated Press","title":"Wife of missing Interpol president says he sent her a photo of a knife before his disappearance","description":"Wife of missing Interpol president says he sent her a photo of a knife before his disappearance, signaling danger","url":"https://www.cnbc.com/2018/10/07/wife-of-missing-interpol-president-he-sent-photo-of-knife-before-disappearing.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/10/05/105490464-1538749673308gettyimages-806924826.1910x1000.jpeg","publishedAt":"2018-10-07T16:11:00Z","content":"The wife of the missing president of Interpol says her husband sent her an image of a knife before he disappeared during a trip to their native China. Making her first public comments on the mystery surrounding Meng Hongwei's whereabouts, Grace Meng told repo… [+742 chars]"},{"source":{"id":"cnbc","name":"CNBC"},"author":"The Associated Press","title":"Interpol says missing Chinese official has resigned, under investigation by Beijing","description":"Interpol says Chinese official who was reported missing has resigned and is under investigation by Beijing","url":"https://www.cnbc.com/2018/10/07/missing-chinese-official-resigned-under-investigation-by-beijing.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/10/05/105490464-1538749673308gettyimages-806924826.1910x1000.jpeg","publishedAt":"2018-10-07T16:11:00Z","content":"Interpol says a Chinese official who was reported missing has resigned as head of the international police agency. The update came after Beijing announced Meng Hongwei was under investigation in China. Interpol said Sunday night that Meng had resigned as pres… [+657 chars]"},{"source":{"id":"cnbc","name":"CNBC"},"author":"Sarah Berger","title":"'Shark Tank' secrets from founder of 'Tank' reject Ring, which Amazon bought for $1 billion","description":"Jamie Siminoff didn't like the offer he got from Kevin O'Leary on \"Shark Tank\" in 2013, so the founder left empty-handed. But in 2018, Amazon bought his company, Ring, for $1 billion.  Now, he's a guest judge on the season 10 premiere spilling behind-the-scen…","url":"https://www.cnbc.com/2018/10/05/shark-tank-behind-the-scenes-secrets-from-founder-of-amazons-ring.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/10/04/105488611-1538678746907gettyimages-1035582012.1910x1000.jpg","publishedAt":"2018-10-07T15:55:00Z","content":"As a guest judge instead of a contestant, several elements of the show surprised Siminoff, who says he's been a fan of \"Shark Tank\" for years. He was impressed by the lucrative portfolios the judges have built from \"Shark Tank\" businesses and that the Sharks … [+1266 chars]"},{"source":{"id":"cnbc","name":"CNBC"},"author":"Darren Geeter","title":"The business of owning an NFL team","description":"Owning a team in the National Football League can be a profitable endeavor. Some clubs are valued at more than $2 billion and pull in hundreds of millions of dollars each year.","url":"https://www.cnbc.com/2018/10/05/nfl-owners-teams-football.html","urlToImage":"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2014/07/23/101860927-nfl.1910x1000.jpg","publishedAt":"2018-10-07T15:00:00Z","content":null}]}




    // Spinner Stop ********************************************************************
    spinner.stop();

   // ********* REQUEST ******************************************
     var xmlhttp = new XMLHttpRequest();
    var url = "https://newsapi.org/v2/everything?sources=cnbc&apiKey=fe635f9040f54fa28635156194b22f68";
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.responseText);
            console.log(result);
            debugger;
        }
        else{
            console.log("ERROR__check+temperature__ this.readyState:"+this.readyState+" this.status:"+this.status+" "+this.responseText);
        }

    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
