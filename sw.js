const CACHE = 'mikefit-v1786439100';
const APP_SHELL = [
  './index.html',
  './workout.html',
  './onboarding.html',
  './manifest.json',
];

// Fotos de ejercicios (free-exercise-db, descargadas al repo para funcionar offline)
const EX_PHOTOS = [
  './ex-photos/Barbell_Bench_Press_-_Medium_Grip/0.jpg',
  './ex-photos/Barbell_Bench_Press_-_Medium_Grip/1.jpg',
  './ex-photos/Dumbbell_Bench_Press/0.jpg',
  './ex-photos/Dumbbell_Bench_Press/1.jpg',
  './ex-photos/Barbell_Incline_Bench_Press_-_Medium_Grip/0.jpg',
  './ex-photos/Barbell_Incline_Bench_Press_-_Medium_Grip/1.jpg',
  './ex-photos/Incline_Dumbbell_Press/0.jpg',
  './ex-photos/Incline_Dumbbell_Press/1.jpg',
  './ex-photos/Cable_Crossover/0.jpg',
  './ex-photos/Cable_Crossover/1.jpg',
  './ex-photos/Dumbbell_Flyes/0.jpg',
  './ex-photos/Dumbbell_Flyes/1.jpg',
  './ex-photos/Dips_-_Chest_Version/0.jpg',
  './ex-photos/Dips_-_Chest_Version/1.jpg',
  './ex-photos/Wide-Grip_Lat_Pulldown/0.jpg',
  './ex-photos/Wide-Grip_Lat_Pulldown/1.jpg',
  './ex-photos/V-Bar_Pulldown/0.jpg',
  './ex-photos/V-Bar_Pulldown/1.jpg',
  './ex-photos/Seated_Cable_Rows/0.jpg',
  './ex-photos/Seated_Cable_Rows/1.jpg',
  './ex-photos/Bent_Over_Barbell_Row/0.jpg',
  './ex-photos/Bent_Over_Barbell_Row/1.jpg',
  './ex-photos/One-Arm_Dumbbell_Row/0.jpg',
  './ex-photos/One-Arm_Dumbbell_Row/1.jpg',
  './ex-photos/Pullups/0.jpg',
  './ex-photos/Pullups/1.jpg',
  './ex-photos/Barbell_Deadlift/0.jpg',
  './ex-photos/Barbell_Deadlift/1.jpg',
  './ex-photos/Face_Pull/0.jpg',
  './ex-photos/Face_Pull/1.jpg',
  './ex-photos/Dumbbell_Shoulder_Press/0.jpg',
  './ex-photos/Dumbbell_Shoulder_Press/1.jpg',
  './ex-photos/Barbell_Shoulder_Press/0.jpg',
  './ex-photos/Barbell_Shoulder_Press/1.jpg',
  './ex-photos/Arnold_Dumbbell_Press/0.jpg',
  './ex-photos/Arnold_Dumbbell_Press/1.jpg',
  './ex-photos/Side_Lateral_Raise/0.jpg',
  './ex-photos/Side_Lateral_Raise/1.jpg',
  './ex-photos/Front_Dumbbell_Raise/0.jpg',
  './ex-photos/Front_Dumbbell_Raise/1.jpg',
  './ex-photos/Barbell_Curl/0.jpg',
  './ex-photos/Barbell_Curl/1.jpg',
  './ex-photos/Dumbbell_Alternate_Bicep_Curl/0.jpg',
  './ex-photos/Dumbbell_Alternate_Bicep_Curl/1.jpg',
  './ex-photos/Preacher_Curl/0.jpg',
  './ex-photos/Preacher_Curl/1.jpg',
  './ex-photos/Hammer_Curls/0.jpg',
  './ex-photos/Hammer_Curls/1.jpg',
  './ex-photos/Triceps_Pushdown/0.jpg',
  './ex-photos/Triceps_Pushdown/1.jpg',
  './ex-photos/EZ-Bar_Skullcrusher/0.jpg',
  './ex-photos/EZ-Bar_Skullcrusher/1.jpg',
  './ex-photos/Dips_-_Triceps_Version/0.jpg',
  './ex-photos/Dips_-_Triceps_Version/1.jpg',
  './ex-photos/Triceps_Overhead_Extension_with_Rope/0.jpg',
  './ex-photos/Triceps_Overhead_Extension_with_Rope/1.jpg',
  './ex-photos/Barbell_Squat/0.jpg',
  './ex-photos/Barbell_Squat/1.jpg',
  './ex-photos/Leg_Press/0.jpg',
  './ex-photos/Leg_Press/1.jpg',
  './ex-photos/Dumbbell_Lunges/0.jpg',
  './ex-photos/Dumbbell_Lunges/1.jpg',
  './ex-photos/Leg_Extensions/0.jpg',
  './ex-photos/Leg_Extensions/1.jpg',
  './ex-photos/Split_Squat_with_Dumbbells/0.jpg',
  './ex-photos/Split_Squat_with_Dumbbells/1.jpg',
  './ex-photos/Romanian_Deadlift/0.jpg',
  './ex-photos/Romanian_Deadlift/1.jpg',
  './ex-photos/Lying_Leg_Curls/0.jpg',
  './ex-photos/Lying_Leg_Curls/1.jpg',
  './ex-photos/Seated_Leg_Curl/0.jpg',
  './ex-photos/Seated_Leg_Curl/1.jpg',
  './ex-photos/Barbell_Hip_Thrust/0.jpg',
  './ex-photos/Barbell_Hip_Thrust/1.jpg',
  './ex-photos/Thigh_Abductor/0.jpg',
  './ex-photos/Thigh_Abductor/1.jpg',
  './ex-photos/One-Legged_Cable_Kickback/0.jpg',
  './ex-photos/One-Legged_Cable_Kickback/1.jpg',
  './ex-photos/Ab_Roller/0.jpg',
  './ex-photos/Ab_Roller/1.jpg',
  './ex-photos/Plank/0.jpg',
  './ex-photos/Plank/1.jpg',
  './ex-photos/Hanging_Leg_Raise/0.jpg',
  './ex-photos/Hanging_Leg_Raise/1.jpg',
  './ex-photos/Cable_Crunch/0.jpg',
  './ex-photos/Cable_Crunch/1.jpg',
  './ex-photos/Russian_Twist/0.jpg',
  './ex-photos/Russian_Twist/1.jpg',
  './ex-photos/Bicycling_Stationary/0.jpg',
  './ex-photos/Bicycling_Stationary/1.jpg',
  './ex-photos/Rowing_Stationary/0.jpg',
  './ex-photos/Rowing_Stationary/1.jpg',
  './ex-photos/Rope_Jumping/0.jpg',
  './ex-photos/Rope_Jumping/1.jpg',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(APP_SHELL.concat(EX_PHOTOS))));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // Same-origin (app files): cache-first, actualiza en background
  if (url.origin === location.origin) {
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(e.request).then(cached => {
          const networkFetch = fetch(e.request).then(res => {
            if (res && res.status === 200) cache.put(e.request, res.clone());
            return res;
          }).catch(() => cached);
          return cached || networkFetch;
        })
      )
    );
    return;
  }

  // Google Fonts: stale-while-revalidate
  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(e.request).then(cached => {
          const networkFetch = fetch(e.request).then(res => {
            if (res && res.status === 200) cache.put(e.request, res.clone());
            return res;
          }).catch(() => cached);
          return cached || networkFetch;
        })
      )
    );
  }
});
