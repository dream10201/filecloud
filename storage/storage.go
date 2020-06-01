package storage

import (
	"github.com/dream10201/filecloud/v2/auth"
	"github.com/dream10201/filecloud/v2/settings"
	"github.com/dream10201/filecloud/v2/share"
	"github.com/dream10201/filecloud/v2/users"
)

// Storage is a storage powered by a Backend which makes the necessary
// verifications when fetching and saving data to ensure consistency.
type Storage struct {
	Users    *users.Storage
	Share    *share.Storage
	Auth     *auth.Storage
	Settings *settings.Storage
}
