import customSelect from '@/components/atoms/custom-select/custom-select.vue'

export default {
  name: 'profile-settings-information',
  components: {
    'custom-select': customSelect
  },
  data () {
    return {
      countries: [
        {
          name: 'Россия',
          value: 'russia'
        },
        {
          name: 'Армения',
          value: 'armenia'
        },
        {
          name: 'Германия',
          value: 'germany'
        },
        {
          name: 'США',
          value: 'usa'
        }
      ],
      cities: [
        {
          name: 'Москва',
          value: 'moscow'
        },
        {
          name: 'Армения',
          value: 'armenia'
        },
        {
          name: 'Германия',
          value: 'germany'
        },
        {
          name: 'США',
          value: 'usa'
        }
      ],
      timezones: [
        {
          name: '(GMT+02:00) Калининград',
          value: 'tz1'
        },
        {
          name: '(GMT+02:00) Калининград',
          value: 'tz2'
        },
        {
          name: '(GMT+02:00) Калининград',
          value: 'tz3'
        },
        {
          name: '(GMT+02:00) Калининград',
          value: 'tz4'
        }
      ],
      years: [
        {
          name: '1992',
          value: '1992'
        },
        {
          name: '1993',
          value: '1993'
        },
        {
          name: '1994',
          value: '1994'
        },
        {
          name: '1995',
          value: '1995'
        },
        {
          name: '1996',
          value: '1996'
        },
        {
          name: '1997',
          value: '1997'
        },
        {
          name: '1998',
          value: '1998'
        },
        {
          name: '1999',
          value: '1999'
        }
      ],
      months: [
        {
          name: 'Январь',
          value: 'january'
        },
        {
          name: 'Февраль',
          value: 'february'
        },
        {
          name: 'Март',
          value: 'march'
        },
        {
          name: 'Апрель',
          value: 'april'
        },
        {
          name: 'Май',
          value: 'may'
        },
        {
          name: 'Июнь',
          value: 'june'
        },
        {
          name: 'Июль',
          value: 'jule'
        },
        {
          name: 'Август',
          value: 'august'
        },
        {
          name: 'Сентябрь',
          value: 'september'
        },
        {
          name: 'Октябрь',
          value: 'october'
        },
        {
          name: 'Ноябрь',
          value: 'november'
        },
        {
          name: 'Декабрь',
          value: 'december'
        }
      ],
      days: [
        {
          name: '1',
          value: '1'
        },
        {
          name: '2',
          value: '2'
        },
        {
          name: '3',
          value: '3'
        },
        {
          name: '4',
          value: '4'
        },
        {
          name: '5',
          value: '5'
        },
        {
          name: '6',
          value: '6'
        },
        {
          name: '7',
          value: '7'
        },
        {
          name: '8',
          value: '8'
        },
        {
          name: '9',
          value: '9'
        },
        {
          name: '10',
          value: '10'
        },
        {
          name: '11',
          value: '11'
        },
        {
          name: '12',
          value: '12'
        },
        {
          name: '13',
          value: '13'
        },
        {
          name: '14',
          value: '14'
        },
        {
          name: '15',
          value: '15'
        },
        {
          name: '16',
          value: '16'
        },
        {
          name: '17',
          value: '17'
        },
        {
          name: '18',
          value: '18'
        },
        {
          name: '19',
          value: '19'
        },
        {
          name: '20',
          value: '20'
        },
        {
          name: '21',
          value: '21'
        },
        {
          name: '22',
          value: '22'
        },
        {
          name: '23',
          value: '23'
        },
        {
          name: '24',
          value: '24'
        },
        {
          name: '25',
          value: '25'
        },
        {
          name: '26',
          value: '26'
        },
        {
          name: '27',
          value: '27'
        },
        {
          name: '28',
          value: '28'
        },
        {
          name: '29',
          value: '29'
        },
        {
          name: '30',
          value: '30'
        },
        {
          name: '31',
          value: '31'
        }
      ],
      activeGender: 'male'
    }
  },
  methods: {
    setActiveGender (gender) {
      this.activeGender = gender
    }
  }
}
