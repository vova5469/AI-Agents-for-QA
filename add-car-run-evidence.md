# Run evidence: Add car

## Запущена команда

```powershell
npx playwright test tests/add-car.spec.ts --project=chromium
```

## Фактичний результат

- Exit code: `0`
- Тривалість тестового запуску: `12.6s`
- Результат: `1 passed`

```text
Running 1 test using 1 worker

  ok 1 [chromium] › tests\add-car.spec.ts:3:5 › guest can add an Audi TT to Garage (8.0s)

  1 passed (12.6s)
```
