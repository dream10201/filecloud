package main

import (
	"runtime"

	"github.com/dream10201/filecloud/v2/cmd"
)

func main() {
	runtime.GOMAXPROCS(runtime.NumCPU())
	cmd.Execute()
}
