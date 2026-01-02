- Self hosted runner
- We need to configure the OS
- we need to configure the Jobs
- We need to configure the steps to be performed
- we can write a js script in the steps as well.
  
### How to configure secrets and environment variables while running the github actions
- `env` section under jobs we can define the key value pair
```yaml
    env:
        GH_TOKEN: ${{ secrets.GH_TOKEN}}
```

### Task
- Write a thanks message to the issues, when ever a person creates an issue
- Add a label for the issue as well
- Note: We need to configure permission in the job to do the write operation on the issues

### Task2
- ability to integrate with open api
- provide a facility of `/chat`, `/review`

### Publishing to artifacts
