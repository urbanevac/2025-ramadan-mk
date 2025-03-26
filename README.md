# Ramadan Prayer Timetable

A responsive web application displaying Ramadan prayer times for Milton Keynes Islamic Center (MKMA). This calendar shows the five daily prayers (Fajr, Dhuhr, Asr, Maghrib, and Isha) for the entire month of Ramadan 1446 AH (2025).

## Features

- 📆 Complete Ramadan calendar with prayer times for all 30 days
- 🕰️ Current day highlighting with next prayer indicator
- 🌙 Today's prayer times prominently displayed
- 🌓 Dark/light mode toggle
- 📱 Fully responsive design for all devices
- ⏱️ Real-time updates showing the next prayer

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Lucide React](https://lucide.dev/) - Icon library
- [date-fns](https://date-fns.org/) - Date utility library

## Installation

1. Clone the repository:

```bash
git clone https://github.com/urbanevac/2025-ramadan-mk.git
cd 2025-ramadan-mk
```

2. Install dependencies:

```shellscript
npm install
```

3. Run the development server:

```shellscript
npm run dev
```


4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.


## Usage

The calendar automatically detects the current date and highlights the corresponding day in the calendar. It also calculates which prayer is next based on the current time.

### Customization

To customize the calendar for a different location or year:

1. Update the prayer times in `lib/ramadan-data.ts`
2. Modify the header and footer information in their respective components
3. Adjust the styling in `tailwind.config.js` and `globals.css` if needed


## Deployment

The easiest way to deploy this application is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Vercel will detect Next.js automatically and set up the build configuration


## Project Structure

```plaintext
ramadan-calendar/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── calendar.tsx
│   ├── current-day-card.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   └── theme-provider.tsx
├── lib/
│   └── ramadan-data.ts
├── public/
│   └── (static assets)
├── tailwind.config.js
└── package.json
```

## Credits

- Prayer times data sourced from MKMA Community
- Designed in 🇬🇧 by [morituri.co](https://morituri.co)
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
