#!/usr/bin/env node

const { program } = require("commander");
const fs = require("fs-extra");
const path = require("path");

// CLI 버전 정보
const packageJson = require("./package.json");
program.version(packageJson.version);

// 템플릿 복사 함수
async function createProject(templateName, projectName) {
  // 현재 CLI가 설치된 디렉토리 기준으로 템플릿 경로 설정
  const templatePath = path.join(__dirname, "templates", templateName);

  // 프로젝트가 생성될 타겟 경로
  const targetPath = path.join(process.cwd(), projectName);

  try {
    // 디렉토리 또는 파일이 이미 있을 경우 에러를 뱉고 싶다면 체크 로직을 추가
    if (fs.existsSync(targetPath)) {
      console.error(
        `이미 '${projectName}' 디렉토리가 존재합니다. 다른 이름을 선택해주세요.`
      );
      process.exit(1);
    }

    // 템플릿을 대상 경로로 복사
    await fs.copy(templatePath, targetPath);

    console.log(
      `'${projectName}' 디렉토리에 ${templateName} 템플릿을 생성했습니다!`
    );
    console.log("다음 단계로 이동하세요:");
    console.log(`  cd ${projectName}`);
    if (templateName === "react-template") {
      console.log(`  npm install 또는 yarn`);
      console.log(`  npm run start 또는 yarn start`);
    } else if (templateName === "go-template") {
      console.log(`  go run main.go`);
    }
  } catch (error) {
    console.error(`프로젝트 생성 중 오류가 발생했습니다: ${error}`);
  }
}

// 명령어: create-danver-app react [projectName]
program
  .command("react <projectName>")
  .description("React 템플릿으로 새 프로젝트를 만듭니다.")
  .action((projectName) => {
    createProject("react-template", projectName);
  });

// 명령어: create-danver-app go [projectName]
program
  .command("go <projectName>")
  .description("Go 템플릿으로 새 프로젝트를 만듭니다.")
  .action((projectName) => {
    createProject("go-template", projectName);
  });

// 파싱
program.parse(process.argv);
