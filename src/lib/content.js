export function getFooterContent() {
  const data = {
    addressLine1: `Wrights Ave, Highfield, Timaru 7910`,
    addressLine2: `South Canterbury, New Zealand`,
    phoneNumber: `+64 (3) 688 6074`,
    emailAddress: `admin@craighead.school.nz`,
    usefulLinks: [
      { title: `Calendar & Term Dates`, link: `https://craighead.school.nz/calendar/`},
      { title: `Kōrero Newsletter`, link: `https://craighead.school.nz/a-craighead-korero-news/`},
      { title: `CraigNet - Parent & Student Info portal`, link: `https://craighead.school.nz/craignet/`},
      { title: `KAMAR Student/Parent portal`, link: `https://portal.craighead.school.nz/index.php?redirect=1&redirect=3`},
      { title: `Craighead Sports Portal`, link: `https://www.sporty.co.nz/craighead`},
      { title: `Wellbeing Website`, link: `https://sites.google.com/craighead.school.nz/studentwellbeingsite/home`},
      { title: `School Policy Documents`, link: ``},
      { title: `Website Terms & Conditions`, link: `https://craighead.school.nz/2022-website-terms-conditions/`},
    ]
  }

  return data
}

export function getStudentWelcomeContent() {
  const data = {
    blurb: `Craighead has a reputation for lifting the performance of our students - in all activities, both in and out of the classroom.  We believe many students have unrealized potential and we enjoy helping each girl discover her capabilities.`,
    photo: `/student-leaders.jpg`,
    caption: `Alysha and Zara, Student Leaders`,
    prospectus: ``,
  }

  return data
}

export function getPrincipalsWelcomeContent() {
  const data = {
    quote: `I warmly welcome you to our wonderful school. Craighead is a unique place, with a distinctively warm and friendly family atmosphere which you will notice immediately when you visit our lovely campus. It is such a privilege to lead Craighead.`,
    principal: `Lindy Graham, Principal`,
  }

  return data
}

export function getStudentSpotlightsContent() {
  const data = [
    {
      src: `/student-drums.jpeg`,
      alt: `A student playing drums.`,
      caption: `Craighead is where I feel like I belong. My friends will be with me the rest of my life.`,
    },
    {
      src: `/student-piano.jpeg`,
      alt: `A student playing piano.`,
      caption: `Craighead helped me find my passion for playing music and the arts.`,
    },
    {
      src: `/student-rowing.jpeg`,
      alt: `A student rowing.`,
      caption: `I'm encouraged to be the best that I can be, and I'm forever grateful for that.`,
    },
  ]

  return data
}

export function getAboutUsContent() {
  const data = {
    pageTitle: `About Us`,
    pageSubtitle: `Learn a little about what makes Craighead special.`,
    pageIntro: `
        Girls who attend Craighead are known for their grace, spirit, character and high levels of intrinsic motivation. They are confident, connected and caring global citizens. They desire to be the best they can be, yet retain the values of respect, integrity, courtesy, cooperation and kindness. Positive relationships exist between our excellent, committed staff and our students. Craighead is very proud of its students, of the way they conduct themselves, of their sporting, cultural and artistic achievements, of the way they wear their uniform and of the way they have the courage to try new things. We don't always have to be the best but Craighead has consistently produced remarkable women who have gone on to achieve remarkable things in their lives.
    `,
    articles: [
      {
        heading: `Special Character`,
        id: `special-character`,
        text: `
          <p>
            <strong>Craighead Diocesan School actively upholds its Special Character founded in Christian values expressed within the broad ethos of Anglicanism, whilst also recognising and welcoming students and families from many different denominational and religious traditions.</strong>
          </p>
          <p>
            In times of increasing change and complexity, it is vital that young people have firm foundations in their search for values and attitudes. Christian education seeks to provide a world view which challenges young people to think critically. Religious Education classes encourage students to explore Christian beliefs and to respect differences within these and other faiths to better understand themselves and their neighbours, both in the local community and in the world.
          </p>
          <p>
            Our School focuses on the needs of the whole person – spiritual, moral, emotional intellectual, social, and physical; the challenge of and commitment to service and stewardship; the love of neighbour; the experience of compassion and community, forgiveness, trust and reconciliation, integrity and courage, tolerance and respect for difference; and the pursuit of truth and justice.
          </p>
          <p>
            We begin each day with a short Chapel service. Here the teaching of the Christianity is given a modern context through story, prayer and song. Occasional Sunday evening services, with a particular focus, are held throughout the school year.
          </p>
          <p>
            Community life, reflecting events in the Church calendar in School, is enriched and strengthened by Craighead’s Special Character.
          </p>
        `,
        photos: [
          {
            src: ``,
            alt: ``,
          }
        ],
      },
      {
        heading: `Boarding`,
        id: `boarding`,
        text: `
          <p>
            With 'brilliant boarding' as our philosophy, the two Craighead Boarding Houses offer quality residential accommodation and pastoral care for up to 140 students. Our new Senior Boarding Wing opened in August, 2014 and is a much admired purpose-built facility. A strong feature of our Boarding experience is the “Big Sister, Little Sister” relationships that develop. Students and staff speak highly of the dynamic and nurturing environment and endorse that it is a “home away from home”.
          </p>
          <p>
            Our beautiful campus, set within mature green spaces encompasses modern and traditional teaching facilities along with the finest Boarding accommodation, Craighead provides a school where students can feel at home and supported in their pursuit of personal excellence.
          </p>
          <p>
            Craighead now offers short term boarding options for Craighead families.
          </p>
        `,
        photos: [
          {
            src: ``,
            alt: ``,
          }
        ],
      },
      {
        heading: `Girls`,
        id: `girls`,
        text: `
          <p>
            Research tells us that single sex schools provide girls with the best opportunity to reach their full academic potential. Girls are more competitive, prepared to take more risks and are more likely to attend University. We are a school that caters specifically for girls, the unique way they learn, the special way they form relationships, and the needs they have as they grow into adults. Learning opportunities are supported by a modern e-learning infrastructure and teaching pedagogy which increasingly allows learning to take place anytime and anywhere through collaboration and innovation. This gives them a distinct advantage for leadership and many careers. Girls do best in Girls’ schools!
          </p>
        `,
        photos: [
          {
            src: ``,
            alt: ``,
          }
        ],
      },
      {
        heading: `Old Girls`,
        id: `old-girls`,
        text: `
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit incidunt nam necessitatibus quo perferendis similique architecto aperiam quaerat corporis nisi, ducimus tempore, laudantium adipisci dolor quasi expedita minus, magni voluptatem!
          </p>
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit incidunt nam necessitatibus quo perferendis similique architecto aperiam quaerat corporis nisi, ducimus tempore, laudantium adipisci dolor quasi expedita minus, magni voluptatem!
          </p>
        `,
        photos: [
          {
            src: ``,
            alt: ``,
          }
        ],
      },
      {
        heading: `History`,
        id: `history`,
        text: `
          <p>
            The story of Craighead begins with a House. In 1875 local surveyor built a substantial home for his family on what was then the outskirts of Timaru. Fifteen years later Henry Le Cren purchased the property and named it “Craighead” after a castle owned by his brother-in-law in Scotland. In 1910 four sisters in Dunedin heard the property was on the market and they saw it as ideal for their dream of establishing a Girls School.
          </p>
          <p>
            The Shand sisters Eleanor, Fanny, Elizabeth and Anna, opened Craighead  School in May 1911 with the expressed aim “to give such a liberal education on modern lines as will be best fitted to train the intellectual, artistic and moral faculties, to develop the character and ultimately to produce refined, cultured and capable young women”. The school began with a roll of six boarders and 11 day girls. From small beginnings the school has flourished, becoming an Anglican Church school at the end of 1926 when the Shand sisters retired from teaching.
          </p>
          <p>
            Craighead has an extensive collection of memorabilia relating to its history from 1911. Amongst its records are photographs, movies, student work, uniforms and school magazines. The items are stored in a purpose built room and are used in some class work and of course class reunions.
          </p>
          <p>
            Donations of photographs, memorabilia and written reminiscences are always gratefully received. The school appointed an archivist in 2005 to manage the collection. The archivist can be contacted on <a href="mailto:archives@craighead.school.nz">archives@craighead.school.nz</a> or through the school office. Gradually the photograph collection is being digitized which will make access even easier in the future. The school archives exist as a repository of the stories of those who are part of the Craighead family. As each year passes more records are created and so more needs to be retained.
          </p>
          <p>
            Visitors are always welcome, by appointment.
          </p>
        `,
        photos: [
          {
            src: ``,
            alt: ``,
          }
        ],
      },
    ]
  }

  return data
}

export function getEnrolmentContent() {
  const data = {
    pageTitle: `Enrolment`,
    pageSubtitle: `Some information on how your daughter can join our community.`,
    pageIntro: `
      Entry to the school is not based on academic ability. We enjoy diversity and helping every student to discover her capabilities. There are no assumptions, no limitations. In the Craighead environment, students have the capacity to excel. Indeed, Craighead students perform well above the national average in all subjects.
    `,
    articles: [
      {
        heading: `Domestic`,
        id: `domestic`,
        text: `
        <p>
          Retro kombucha wayfarers banh mi snackwave, meditation pabst. Thundercats DSA meditation banh mi hexagon fit. Coloring book bushwick cornhole woke vibecession. Fashion axe hot chicken locavore, green juice farm-to-table praxis dreamcatcher bespoke hoodie hell of normcore. Raclette jianbing paleo small batch chia craft beer, authentic bespoke gastropub XOXO fashion axe VHS kale chips godard. Tote bag everyday carry meggings pork belly cardigan, chia vinyl glossier keytar mixtape coloring book. Big mood readymade ramps sriracha stumptown mumblecore cronut cardigan woke sus.
        </p>
        <p>
          Raw denim banh mi umami fixie vice ennui. Chambray wayfarers YOLO bitters crucifix affogato polaroid plaid. Edison bulb chillwave fixie mumblecore. Small batch knausgaard mumblecore hexagon, big mood cloud bread banjo VHS lumbersexual brunch vice. Taiyaki blog lumbersexual, listicle fingerstache brunch fanny pack cloud bread YOLO put a bird on it iceland edison bulb tumeric bodega boys.
        </p>
        <p>
          Sartorial artisan YOLO, irony schlitz snackwave paleo XOXO DSA everyday carry selvage. Mumblecore flannel raclette poutine tousled, fingerstache praxis la croix. Vinyl tacos blue bottle bespoke, forage tousled migas kinfolk fit JOMO live-edge photo booth. Sustainable roof party venmo DIY mlkshk, gentrify Brooklyn butcher hashtag organic asymmetrical. Portland sartorial whatever, photo booth big mood disrupt selvage gluten-free four dollar toast jianbing intelligentsia. Vexillologist offal vaporware typewriter readymade four loko health goth scenester jianbing lomo ascot la croix. Glossier cloud bread raclette, distillery flannel lomo af.
        </p>
        `,
        photos: [
          {
            src: ``,
            alt: ``,
          }
        ],
      },
      {
        heading: `International`,
        id: `international`,
        text: `
          <p>
            Tattooed waistcoat DIY flexitarian letterpress woke prism. Ugh semiotics fam chicharrones hella kale chips af cornhole ethical. Shoreditch intelligentsia tumeric tilde taiyaki lyft bitters roof party praxis gatekeep tattooed stumptown narwhal iPhone DIY. Kogi polaroid poutine, letterpress bicycle rights dreamcatcher sus plaid chambray. Af DIY celiac pabst tumblr occupy, raclette tonx pinterest.          </p>
          <p>
            Ascot gatekeep hoodie woke. Banh mi bruh kitsch, disrupt enamel pin pok pok man bun YOLO bicycle rights gentrify keytar snackwave tofu health goth. Shabby chic migas waistcoat flannel. Man bun echo park kogi tote bag sustainable copper mug.
          </p>
          <p>
            Adaptogen gluten-free yuccie knausgaard, thundercats actually microdosing put a bird on it tonx. Vaporware schlitz jean shorts cray street art ascot tumeric keffiyeh locavore portland deep v edison bulb microdosing franzen PBR&B. Wolf 90's echo park actually, shoreditch lyft messenger bag venmo bicycle rights. Drinking vinegar messenger bag vegan wolf, yuccie hammock meh tumblr organic live-edge vinyl you probably haven't heard of them polaroid cronut.
          </p>
        `,
        photos: [
          {
            src: ``,
            alt: ``,
          }
        ],
      },
    ],
  }

  return data
}

export function getOurSchoolContent() {
  const data = {
    pageTitle: `Our School`,
    pageSubtitle: `See what makes Craighead unique among schools.`,
    pageIntro: `
      VHS sriracha ascot pour-over taiyaki. Pickled williamsburg swag, schlitz mlkshk street art tousled yes plz. Cold-pressed brunch +1 wolf franzen meditation mustache JOMO edison bulb DSA tilde. Flannel pabst 90's, crucifix DIY cardigan chicharrones affogato asymmetrical pitchfork art party bruh pork belly godard. Pour-over retro adaptogen, wolf selvage brunch vexillologist la croix heirloom banjo messenger bag cliche waistcoat big mood street art. Keffiyeh actually bespoke meditation, microdosing schlitz cray pork belly occupy four dollar toast single-origin coffee banh mi jianbing semiotics 8-bit.
    `,
    articles: [
      {
        heading: `Academic performance`,
        id: `academic-performance`,
        text: `
          <p>
            There is a strong work ethic where positive expectations fuel students’ willingness to strive to be the best they can be. Our school philosophy is that many students may have unrealized potential, therefore we encourage a process of self-discovery.
          </p>
      
          <p>
            Prism woke intelligentsia keffiyeh deep v you probably haven't heard of them, DSA vegan unicorn occupy yes plz chillwave pok pok slow-carb. Small batch next level plaid neutra air plant bespoke. Vegan synth big mood master cleanse enamel pin. Ascot enamel pin keytar pok pok, brunch raw denim pickled locavore Brooklyn tote bag. Tacos art party yes plz shaman chambray tumeric lumbersexual fingerstache crucifix. Beard succulents street art, bitters yuccie chillwave snackwave copper mug disrupt etsy. Salvia kogi locavore distillery chartreuse next level.
          </p>
        `,
        photos: [
          {
            src: ``,
            alt: ``,
          }
        ],
      },
      {
        heading: `Learning support`,
        id: `learning-support`,
        text: `
          <p>
            <strong>
            Teachers understand that ‘one-size-fits-all’ thinking creates barriers which can exclude many students from realising their potential.  Teachers regularly ask students about their learning and use this information to adapt and improve learning programmes. They also provide timely and useful feedback to students about their learning. Sometimes a student might need extra support and we provide this in a variety of ways.
            </strong>
          </p>
      
          <p>
            All students are supported in achieving their personal excellence at Craighead Diocesan School. As a well resourced school, we offer a number of initiatives to support all students’ learning. Individual support is provided both in and outside of the classroom as well as dedicated Literacy and Numeracy Support in small groups. We also offer peer tutoring in both these areas. 
          </p>
      
          <p>
            We have three part-time Teacher Aides who provide support in a number of classrooms across all levels, and who engage in targeted Tutor Reading with those students reading below their age level. Our Special Needs Coordinator (SENCo) regularly meets with small groups of students in Years 7 and 8 to focus on Literacy and Numeracy skills. Support Studies tutorials also run alongside the girls’ regular timetables at Years 9 and 10 so that they don’t miss too much of any one subject but still have access to extra support when needed.
          </p>
      
          <p>
            Support is offered to our Senior students (Years 11-13) through the Foundation Studies programme which is designed to allow more flexibility and one-on-one time with a teacher in a small but multi-level class. Each student in Foundation Studies receives an Individual Learning Plan based on their individual learning goals.
          </p>
        `,
        photos: [
          {
            src: ``,
            alt: ``,
          }
        ],
      },
      {
        heading: `School structure`,
        id: `school-structure`,
        text: `
          <p>
            <strong>
              We fundamentally believe that students need to head into their Senior school years with a solid foundation in all learning areas, including Christian Education.
            </strong>
          </p>
          
          <p>
            Education goes further than the classroom. We are concerned with preparing our students with skills and strategies that will help them throughout life.
          </p>
        `,
        photos: [
          {
            src: ``,
            alt: ``,
          }
        ],
      },
      {
        heading: `Sporting`,
        id: `sporting`,
        text: `
          <p>
            Lyft cardigan copper mug mlkshk hot chicken 3 wolf moon drinking vinegar gatekeep. Vinyl shoreditch quinoa, neutra chartreuse hoodie hell of meggings. Try-hard raw denim polaroid, pitchfork selfies dreamcatcher vibecession YOLO DIY helvetica 90's hashtag VHS put a bird on it vaporware. Selvage ascot viral actually gastropub literally austin crucifix. Mlkshk next level portland schlitz food truck vibecession pinterest kickstarter gentrify pok pok. Literally subway tile seitan iPhone umami franzen. Hexagon woke JOMO cornhole cloud bread vape, celiac meh fashion axe roof party williamsburg chartreuse tilde.
          </p>
          <p>
            Humblebrag 8-bit messenger bag gastropub blog, tote bag yuccie narwhal four dollar toast succulents actually brunch slow-carb copper mug. Wayfarers vinyl squid put a bird on it, health goth mustache master cleanse keytar listicle blue bottle iPhone humblebrag. Mukbang single-origin coffee coloring book forage vegan wolf tumblr kombucha. Truffaut cliche irony yes plz post-ironic single-origin coffee jean shorts. Cray disrupt taiyaki sartorial, heirloom irony taxidermy meh vexillologist bruh 3 wolf moon flannel.
          </p>
            Messenger bag helvetica narwhal sriracha meditation ennui. Sustainable prism subway tile wayfarers lumbersexual roof party lomo tacos aesthetic. Whatever microdosing pug, craft beer health goth live-edge bespoke. 3 wolf moon etsy salvia, celiac fixie bicycle rights hot chicken poutine prism dreamcatcher occupy. Pok pok XOXO brunch, pug activated charcoal celiac mixtape cliche gastropub cray schlitz hoodie.
          <p>
          </p>
         `,
         photos: [
          {
            src: ``,
            alt: ``,
          }
        ],
      },
      {
        heading: `Cultural`,
        id: `cultural`,
        text: `
          <p>
            Meh copper mug jianbing, pickled vape fashion axe ennui pop-up. Flannel food truck williamsburg praxis fingerstache pour-over vinyl direct trade poke cray marfa cold-pressed mukbang. Forage kinfolk XOXO, sustainable truffaut af twee mumblecore squid banh mi shabby chic echo park vape vaporware. Cred four dollar toast VHS shoreditch gluten-free. Tumeric butcher deep v aesthetic. Umami kickstarter gastropub organic, cold-pressed palo santo vinyl viral tonx 3 wolf moon.
          </p>
          <p>
            Trust fund iPhone cloud bread, af mustache edison bulb artisan. Fixie bushwick VHS gochujang sustainable cronut. Austin fingerstache pok pok, raclette 3 wolf moon gatekeep normcore DIY kale chips chicharrones live-edge yes plz mumblecore church-key. Next level readymade four loko iPhone adaptogen trust fund selfies aesthetic mixtape cloud bread 90's portland gochujang selvage.
          </p>
          <p>
            Subway tile godard narwhal poutine truffaut skateboard, selvage banjo small batch hammock church-key typewriter literally blog. Art party letterpress hammock cloud bread you probably haven't heard of them leggings typewriter JOMO man bun. Swag pug you probably haven't heard of them, enamel pin cornhole artisan viral fashion axe +1 leggings slow-carb tacos. Kogi gluten-free unicorn organic disrupt Brooklyn chicharrones hella aesthetic vinyl hoodie gochujang +1 cloud bread put a bird on it. Kale chips air plant aesthetic slow-carb williamsburg, drinking vinegar before they sold out fingerstache fanny pack ascot.
          </p>
        
        `,
        photos: [
          {
            src: ``,
            alt: ``,
          }
        ],
      },
      {
        heading: `Facilities hire`,
        id: `facilities-hire`,
        text: `
          <p>
            Messenger bag waistcoat thundercats venmo, actually selvage asymmetrical. Before they sold out plaid big mood, try-hard live-edge same taiyaki flannel twee hexagon irony keytar four loko. Vaporware squid you probably haven't heard of them sartorial man bun, sriracha hot chicken pinterest quinoa polaroid crucifix godard. Man braid forage retro wolf fam cronut pinterest seitan selvage bruh mukbang gochujang. Mukbang intelligentsia fam, four dollar toast craft beer pitchfork palo santo.
          </p>
          <p>
            Bruh fam artisan seitan, poke everyday carry echo park pickled gastropub marfa chartreuse shoreditch single-origin coffee williamsburg letterpress. Kinfolk pork belly tousled neutra iPhone praxis hella whatever. Bitters banjo stumptown, +1 umami hot chicken tofu venmo snackwave marfa four dollar toast ascot cloud bread meditation. Affogato bushwick glossier bespoke godard organic kinfolk prism heirloom selvage skateboard microdosing hoodie snackwave. Authentic tbh tousled, PBR&B ethical yr forage letterpress cronut trust fund taxidermy.
          </p>
          <p>
            Next level mixtape knausgaard green juice. Wayfarers chartreuse hoodie af same. Kickstarter franzen bitters praxis yr, ascot plaid chambray vinyl poutine. Thundercats selvage bicycle rights tumblr aesthetic banjo ramps raclette venmo semiotics quinoa man braid direct trade chartreuse four dollar toast. Umami listicle four dollar toast raw denim live-edge artisan williamsburg.
          </p>
        `,
        photos: [
          {
            src: ``,
            alt: ``,
          }
        ],
      },
    ],
  }

  return data
}