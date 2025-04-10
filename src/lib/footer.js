import { writable } from 'svelte/store'

export default writable({
  addressLine1: `Wrights Ave, Highfield, Timaru 7910`,
  addressLine2: `South Canterbury, New Zealand`,
  phoneNumber: `+64 (3) 688 6074`,
  emailAddress: `admin@craighead.school.nz`,
  usefulLinks: [
    { title: `Calendar & Term Dates`, link: `https://cds.craighead.school.nz/calendar/` },
    { title: `Kōrero`, link: `https://craighead.school.nz/korero/` },
    { title: `CraigNet - Parent & Student Info Portal`, link: `https://cds.craighead.school.nz/craignet/` },
    { title: `KAMAR Student/Parent Portal`, link: `https://craighead.school.kiwi` },
    { title: `Sports Portal`, link: `https://www.sporty.co.nz/craighead` },
    { title: `Uniform Shop`, link: `https://cds.craighead.school.nz/uniform/` },
    { title: `Wellbeing Website`, link: `https://sites.google.com/craighead.school.nz/studentwellbeingsite/home` },
    { title: `School Policies and Procedures`, link: `https://craighead.schooldocs.co.nz/` },
    { title: `Website Terms & Conditions`, link: `https://cds.craighead.school.nz/2022-website-terms-conditions/` },
  ],
})
