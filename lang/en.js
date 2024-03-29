import validations from 'vee-validate/dist/locale/en.json'

export default {
  validations: {
    messages: {
      ...validations.messages,
      tel: 'Please enter valid phone number',
      passwordConfirmation: 'Password confirmation does not match',
    },
    fields: {
      name: 'Name',
      password: 'Password',
      verificationCode: 'Verification code',
      phoneNumber: 'Phone number',
      activity: 'Activity',
      age: 'Age',
      biography: 'About yourself',
      passwordConfirm: 'Confirmation password',
      email: 'Email',
      street: 'Street',
      postalCode: 'Postal code',
      region: 'Region',
      district: 'District',
    },
  },
  homepage: 'Homepage',
  searchPlaceholder: 'Courses, Lessons, Articles...',
  issued: 'Issued',
  signIn: 'Sign In',
  signUp: 'Sign Up',
  toSignUp: 'Sign Up',
  signInText: 'Sign in to your TopBrains account on this device or',
  signInPasswordPalceholder: 'Password...',
  forgotPassword: 'Forgot your password?',
  rememberMe: 'Remember me',
  enter: 'Sign in',
  or: 'or',
  and: 'and',
  signInGoogle: 'Sign in with Google',
  signInFacebook: 'Sign in with Facebook',
  uzCurrency: 'Sum',
  terms: {
    service: 'Terms of service',
    privacy: 'Privacy policy',
    info: 'Only information that provides the possibility of authorization and support for user feedback is subject to collection.',
    firstBand:
      'With the consent of the user, the portal receives the following data from the user:',
    secondBand: 'Some user actions are automatically stored in server logs:',
    thirdBand: 'The information is used',
    address: 'address',
    IpAddress: 'IP address',
    name: 'Full name',
    collectedData: 'browser type, settings, request time, etc.',
    termsAndPrivacy:
      'By providing your phone, you agree with our {terms} and {policy}.',
  },
  purchase: {
    course: 'Course of ',
    payment: 'Payment',
    paymentMethod: 'Payment method',
    paymentMethodInfo:
      'Choose a payment method convenient for you. If none of the options work for you, ',
    paymentMethodInfoLink: 'please contact us',
    masterVisaInfo:
      'When paying with a MasterCard or Visa card, you will be redirected to a secure paddle.com service.',
    paymentDetails:
      'When paying with Payme, you will receive a check with the amount of the exchange rate.',
    privacyPolicy: 'Privacy Policy',
    access: 'Access',
    duration: 'Duration',
    students: 'Students',
  },
  danielPink: {
    courseTitle: 'Sell to your customers on a new level',
    access: 'Lifelong',
  },
  collab: {
    support: 'support',
    partnership: 'Partnership of TopBrains',
    withYou: 'with professionals, like you!',
    mainPicCaption: 'Beginning of partnership with Alisher Isaev.',
    firstBand:
      'We are always glad to cooperate with the masters of our field and will be happy to record a course together. Below we suggest you familiarize yourself with how we can do this and with photos from the filming of existing courses.',
    secondBand:
      'If you are ready to discuss cooperation with us, then let you or your manager contact us via mail',
    secondBand2: 'or through our telegram chat',
    thirdBandHeader: 'Who do we need',
    thirdBand:
      'We will be happy to consider any person with a wide and uniqueexperience in their field. If you have the following characteristics, then would be even better:',
    thirdBandRequirements1: 'Teaching experience',
    thirdBandRequirements2: 'Activity in personal social networks networks',
    thirdBandRequirements3: 'Cooperation with well-known companies',
    fourthBandHeader: 'How do we make videos',
    fourthBand:
      'The TopBrains production team focuses on the highest quality video shooting, editing and structuring the course, we will require your experience and knowledge of your field from you and together we will make a course plan, after which we will write it down and our specialists will create a finished product. You will be able to preview the course and confirm its readiness.',
    photoCaption: 'Photos from the filming of the course.',
    photoCaption2: 'Videos from the filming of the course.',
    fourthBandEnding:
      'After the course is published, we will start its release and launch the necessary advertising campaigns in the social media. networks and other sources.',
    fifthBandHeader: 'What will you get after enrolling in the course',
    fifthBand:
      'The course itself is also a strong source of image building and audience gathering for you as a professional in your field. Regarding the profit from the course, you will receive 50% of all future sales under the contract, for more details please contact us via',
    sixthBandHeader: 'What professions do we need',
    sixthBand:
      'Since TopBrains works not only with its audience, but also with yours or your potential, we will accept the widest range of professions, ranging from the most common and narrowest, ending even with masters of doing business and other areas.',
    submit: 'Submit an application',
    submitInfo:
      'You can send an application right here, through the form below, and also under the form you will find a button leading you directly to the telegram chat with our managers.',
  },
  placeholders: {
    name: 'Your name',
    activity: 'Field of activity',
    number: 'Phone number',
    age: 'Your age',
    autobiography: 'Tell us about yourself',
  },

  send: 'Send',
  viaTG: 'via telegram',
  recomend: 'Recomended',
  blogs: {
    titlePartOne: 'Even more knowledge',
    titlePartTwo: ' on the TopBrains blog, ',
    subscribe: 'subscribe',
    caption: 'News, announcements and discounts ',
    caption2: 'in our telegram',
    follow: 'Follow',
    article: 'Article',
    views: ' views',
    blog: "Blog's",
  },
  view: 'read',
  recommend: 'We recommend you',
  admin: 'Admin',
  student: 'Student',
  teacher: 'Teacher',
  savedLessons: 'Saved lessons',
  certificates: 'Certificates',
  articlesRead: 'Articles read',
  lesson: 'Lessons',
  hour: 'Hours',
  reviews: 'Reviews',
  edit: 'Edit',
  yourCourses: 'Your courses',
  newComments: 'New comments',
  cancel: 'Cancel',
  search: 'Search',
  comments: {
    ago: 'ago',
    hour: 'hour',
    day: 'day',
    week: 'week',
    month: 'month',
    year: 'year',
    reply: 'replies',
    placeholder: 'Answer',
    answer: 'Reply',
    add: 'Add a comment',
  },
  watch: 'Watch',
  share: 'Share',
  later: 'Later',
  continue: 'Continue',
  header: {
    lang: 'Language',
    collaboration: 'Collaboration',
    about: 'About Us',
    changeLang: 'Choose language',
  },
  allCourses: 'All courses',
  soon: 'Soon',
  contacts: 'Contacts',
  formalities: 'Formalities',
  footer: {
    desc: 'Online courses of premium quality from leading masters of their field',
    blog: 'Blog',
    termsOfUsage: 'Terms of usage',
    policyShort: 'Privacy pol.',
    policy: 'Privacy Policy',
    supportChat: 'Support Chat',
    allow: 'By submitting your phone, you agree to our terms',
    and: 'and',
    confiden: 'Political confidentiality.',
    join: 'Join',
    ssl: 'Secured with SSL',
  },
  createAccount: 'Create account',
  register: {
    continue: 'Continue',
    firstText: 'Create a new TopBrains account',
    secondText: 'into an already existing account',
    signIn: 'Sign In',
    allow: 'By registering, you agree to our',
    resend: 'Resend code',
    codeMessage: 'SMS was sended to {phoneNumber}. You can send again',
    finishText:
      'Вам осталось придумать пароль, ввести имя и регистрация будет завершена',
  },
  home: {
    homeTitle: {
      start: 'Decades of ',
      middle: 'experience of professionals ',
      end: 'in their field',
    },
    titleTwo:
      'Courses from masters in their field from doing business to the most delicate professions in the world',
    students: 'Students',
    exp: 'Exprience',
    ourCourses: 'Our Courses',
  },
  program: 'Programm',
  faq: {
    title: 'Frequently asked questions',
    what: {
      que: 'What is TopBrains?',
      ans: 'TopBrains is an online learning platform with courses from some of the best experts in their field. TopBrains shoots the courses itself and has its own editing team, so we guarantee you a high level of video lessons and a pleasant and gradual learning process from our mentors.',
    },
    whatYouGet: {
      que: 'What do you get when you buy the course?',
      ans: 'To gain access to the course, you must go through the authorization procedure on the site.',
    },
    pay: {
      que: 'How to pay for the course?',
      ans: 'Payment is made at the time of confirmation of the order on the site.',
    },
    backMoney: {
      que: 'How to get a refund for a course?',
      ans: 'Refunds for the course are possible within 14 days after payment.',
    },
    howToShow: {
      que: 'How to watch the course?',
      ans: 'When you purchase the course, you will get access to video courses and practical tasks. You will also get access to educational information and answers to questions from our mentors.',
    },
    whereQue: {
      que: 'Where to ask your question?',
      ans: 'You can ask a question on the website or by phone at +998 00 000 00 00. We will answer your question within 24 hours.',
    },
    howToBook: {
      que: 'How do I sign up for courses?',
      ans: 'You can pay for as many courses as you like by going to the courses page.',
    },
    teacherKind: {
      que: 'How people work as teacher?',
      ans: 'In TopBrains very good people work as teacher',
    },
    aboutPlatform: 'About platform',
    aboutCourse: 'About courses',
  },
  contact: {
    news: 'News',
    buyCourse: 'Buy courses',
    allInfo: 'General information',
    subtitle:
      'Information should be collected only for authorization and to enable support for feedback from the user.',
    allowSecond: 'Some user actions are automatically stored in server logs:',
    allowFirst:
      'The portal with the consent of the user receives the following information from the user:',
    ip: 'IP address',
    name: 'Name',
    email: 'E-mail address',
    data: 'Information about browser type, add-ons, examination time, etc.',
    chapterTwo: {
      title: 'How the information is used?',
    },
  },
  updated: 'Updated',
  privacy: {
    collectData: 'How data is collected ?',
    data: [
      'Only data that enables the authorization and support of user feedback should be collected.',
      'Only data that enables the authorization and support of user feedback should be collected..',
      'The information provided by the user is used to authorize and communicate with the user, including sending notifications about changes in the status of certain services..',
    ],
  },
  copy: 'Copy',
  copyURL: 'Copy Link',
  som: 'sum',
  discount: '{discount}% Discount until {date}',
  eduPrice: 'Education Price',
  evermore: 'You get the course forever',
  watchCourse: 'View {name} full course',
  evermoreLong:
    'When you buy a course, you get it without any time limits to use it.',
  trailer: 'Trailer',
  showMore: 'Show more',
  lessons: 'Lessons',
  courses: 'Courses',
  coursesDescription:
    'TopBrains shoots courses from many more professionals that you will be interested in',
  articles: 'Articles',
  unAuthFooterDesc: 'News, anons and discounts in our telegram channel',
  course: {
    seeFullCourseOf: 'See full course of {name}',
    purchaseDescription:
      'When you purchase a course, you get it with no time limits and ongoing support.',
    finishedNotificationTitle:
      'Congratulations, {studentName}! You have completed the course of {authorName} 🎉',
    finishedNotificationDesc:
      'You now have access to the Certificate of Completion for the "{authorName} {courseTitle}" course.',
    term: 'Term',
    forever: 'Forever',
    finishedTitle: 'You have completed the course of {author} 🎉',
    finishedDescription:
      'Now you have access to the Certificate of Completion of the “{courseTitle}',
    cancelSuccess: 'You have canceled the course',
  },
  certificate: {
    title: 'Fill out the form below and select the type of certificate',
    description:
      'You can choose either an electronic certificate or a physical one. Its version, the validity of the certificate does not change depending on the choice',
    yourEmail: 'Your email',
    addLanguage: 'Add language',
    langDescription:
      'You can choose in which languages the certificate will be issued to you by entering your full name in those languages.',
    electron: 'Digital',
    physical: 'Physical',
    electronDesc: 'Free, sent to your email',
    physicalDesc: 'Free of charge in Uzbekistan within 2-3 days',
    selectRegion: 'Select region',
    selectDistrict: 'Select district',
    sendSuccess: 'Data has been sent successfully!',
    get: 'Get certificate',
    certificateFor: 'Certificate for completing the {author} course',
    certificateGiven:
      'The certificate was issued by TopBrains LLC {date} and is valid without time restrictions.',
    download: 'Download certificate',
    orderPhysicalVersion: 'Order physical version',
  },
  user: {
    profile: 'Profile',
    logout: 'Logout',
  },
  congrat: 'congratulations!',
  finishCourse: "You're full finished course of TopBrains",
  pageNotFoundTitle: '404 - page not found',
  pageNotFoundDesc: 'Try searching or go to {link}',
  internalServerError: 'Unexpected error occurred, please try again later.',
  minuteShort: 'min',
  resetPassword: {
    title: 'Password recovery',
    description:
      'You can recover your password by verifying your profile phone number. You will receive an SMS with a code.',
    changePasswordDesc:
      'Create a new password and enter it in the form below. After that you will need to log in.',
    verification: 'Verification',
    newPassword: 'New password',
    repeatPassword: 'Repeat password',
    success: 'Your password has been reset successfully!',
  },
  demo: 'Demo',
  language: 'Language',
}
