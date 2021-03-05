#!/usr/bin/env sh
set -e
REPO=$(cd $(dirname $0); pwd)
RELEASE=""
DELETE=""

checkParam () {
  echo "👀 Checking semver format"

  if [ $# -ne 1 ]; then
    echo "❌ This release script requires a single argument corresponding to the semver to be released. See semver.org"
    exit 1
  fi

  GREP="grep"
  if [ -x "$(command -v ggrep)" ]; then
    GREP="ggrep"
  fi

  semver=$(echo "$1" | $GREP -P '^v(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)')

  if [ $? -ne 0 ]; then
    echo "❌ Not valid semver format. See semver.org"
    exit 1
  fi
}
del_release () {
  git tag -d "$1"
  git push origin :refs/tags/$1
}
release () {
  cd $REPO

  checkParam $1

  echo "🧼  Tidying up go modules"
  go mod tidy

  echo "🐑 Creating a new commit for the new release"
  git commit --allow-empty -am "chore: version $semver"
  git tag "$1"
  git push
  git push --tags origin

  echo "📦 Done! $semver released."
}

while getopts "bacr:d" o; do
  case "${o}" in
    r)
      RELEASE=${OPTARG}
      ;;
    d)
      DELETE=${OPTARG}
      ;;
    *)
      usage
      ;;
  esac
done
shift $((OPTIND-1))
if [ "$RELEASE" != "" ]; then
  release $RELEASE
fi

if [ "$DELETE" != "" ]; then
  del_release $DELETE
fi